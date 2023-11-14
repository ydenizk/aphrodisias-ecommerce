"use server";

import { getCart, createCart } from "@/utils/cart";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prismaDb";

export async function setProductQty(productId, quantity) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart.items.find((item) => item.productId === productId);

  if (quantity === 0) {
    if (articleInCart) {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            delete: { id: articleInCart.id },
          },
        },
      });
    }
  } else {
    if (articleInCart) {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            update: { where: { id: articleInCart.id }, data: { quantity } },
          },
        },
      });
    } else {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            create: { productId, quantity },
          },
        },
      });
    }
  }

  revalidatePath("/cart");
}
