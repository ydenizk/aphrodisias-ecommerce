//cart fonksiyonları nı yazıyoruz buraya

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "./prismaDb";
import { getServerSession } from "next-auth";
import { cookies } from "next/dist/client/components/headers";

export async function createCart() {
  const session = await getServerSession(authOptions);

  let newCart;
  //buradaki ve asagıdakı sesiion lı kısımları sign in değilken anonim kullanıcı eklıor,
  //sign in olunca kendi eklediklerimizi görğüyoruz.
  if (session) {
    newCart = await prisma.cart.create({
      data: { userId: session.user.id },
    });
  } else {
    newCart = await prisma.cart.create({
      data: {},
    });
    cookies().set("localCartId", newCart.id);
    //Note:needs encryption +secure settings in real production app -ÇOK KOmplike değil production öncesi YAP!!!
  }

  return {
    ...newCart,
    items: [],
    size: 0,
    subTotal: 0,
  };
}

export async function getCart() {
  const session = await getServerSession(authOptions);

  let cart = null;

  if (session) {
    cart = await prisma.cart.findFirst({
      where: { userId: session.user.id },
      include: { items: { include: { product: true } } },
    });
  } else {
    const localCartId = cookies().get("localCartId")?.value;
    cart = localCartId
      ? await prisma.cart.findUnique({
          where: { id: localCartId },
          include: { items: { include: { product: true } } },
        })
      : null;
  }

  if (!cart) {
    return null;
  }
  return {
    ...cart,
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0), //burada size dediği toplam adet aslında
    subTotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    ),
  };
}



///asagıda sign in değilken bile eklediklerimiz varsa sign in olduktan sonra,
//daha önce sign in ken eklediklerimze eklemek için yapıyoruz.(bunu silip kullanmayabiliriz de,route.js dede kullandık bunu)



export async function mergeAnonymousCartIntoUserCart(userId) {
  const localCartId = cookies().get("localCartId")?.value;

  const localCart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: true },
      })
    : null;

  if (!localCart) return;

  const userCart = await prisma.cart.findFirst({
    where: { userId },
    include: { items: true },
  });

  await prisma.$transaction(async (tx) => {
    if (userCart) {
      const mergedCartItems = mergeCartItems(localCart.items, userCart.items);

      await tx.cartItem.deleteMany({
        where: { cartId: userCart.id },
      });

      await tx.cart.update({
        where: { id: userCart.id },
        data: {
          items: {
            createMany: {
              data: mergedCartItems.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
              })),
            },
          },
        },
      });
    } else {
      await tx.cart.create({
        data: {
          userId,
          items: {
            createMany: {
              data: localCart.items.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
              })),
            },
          },
        },
      });
    }

    await tx.cart.delete({
      where: { id: localCart.id },
    });
    // throw Error("Transaction failed");
    cookies().set("localCartId", "");
  });
}

function mergeCartItems(...cartItems){
  return cartItems.reduce((acc, items) => {
    items.forEach((item) => {
      const existingItem = acc.find((i) => i.productId === item.productId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }
    });
    return acc;
  }, [] );
}



