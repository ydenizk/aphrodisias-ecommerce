import { getCart } from "@/utils/cart";
import React from "react";
import CartEntry from "./cartEntry";
import { setProductQty } from "./action";
import Link from "next/link";

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div className="my-16 w-full ">
      <div className="flex justify-center items-center mx-auto">
        {/* single item */}
        <div className="flex-2  ">
          {cart?.items.map((cartItem) => {
            return (
              <CartEntry
                cartItem={cartItem}
                key={cartItem.id}
                setProductQty={setProductQty}
              />
            );
          })}
          {!cart?.items.length && (
            <h1 className="text-xl capitalize w full text-center my-36 py-4">
              Your cart is Empty
            </h1>
          )}
        </div>
        {/* .......single item END */}

        <div
          className="flex-1 w-full  h-full border-l border-text-slate-400 
        flex flex-col   justify-center items-center p-6 mmd:border-x "
        >
          <div className="flex    w-full justify-between">
            <p className="tracking-wide font-extralight text-lg">
              Subtotal items
            </p>
            <h1 className="tracking-wide text-lg">€ {cart?.subTotal}.00</h1>
          </div>
          <div className="flex   w-full justify-between">
            <p className="tracking-wide text-lg  font-extralight">Delivery</p>
            <h1 className="tracking-wide text-lg">€ 0.00 </h1>
          </div>
          <div className="flex justify-between   w-full mt-4 py-3 border-t border-slate-500">
            <p className="tracking-wide text-lg">TOTAL(inc. VAT)</p>
            {/* {isPending ? (
              <h1 className="tracking-wide text-base uppercase text-green-900">
                Loading...
              </h1>
            ) : (
              <h1 className="tracking-wide text-lg">
                € {cart?.subTotal}.00{" "}
              </h1>
            )} */}
            <h1 className="tracking-wide text-lg font-semibold">
              € {cart?.subTotal}.00{" "}
            </h1>
          </div>

          <Link
            href="/payment"
            className="uppercase bg-gray-400 w-1/2 p-3 text-center text-blackk
         mx-auto  mt-12 transition hover:bg-gray-500 duration-400 cursor-pointer"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
