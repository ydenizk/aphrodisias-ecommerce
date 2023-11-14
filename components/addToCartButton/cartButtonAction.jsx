"use server";
import { createCart, getCart } from "@/utils/cart";
import { prisma } from "@/utils/prismaDb";
import { revalidatePath } from "next/cache";

//Home page de use server yaptığımız için diyor ama ?????

export async function incrementProductQty(productId) {
  //??     getcard undefined yada null sa ikincisini, yapar
  const cart = (await getCart()) ?? (await createCart());

  const productInCart = cart.items.find((item) => item.productId === productId);

  if (productInCart) {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          update: {
            where: { id: productInCart.id },
            data: { quantity: { increment: 1 } },
          },
        },
      },
    });
  } else {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          create: { productId, quantity: 1 },
        },
      },
    });
  }
  revalidatePath("/collection/[id]", "page");
}
