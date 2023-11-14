import { getCart } from "@/utils/cart";
import Link from "next/link";
import React from "react";

async function ShoppingCartButton() {
const cart =await getCart()
  
  return (
    <Link href="/cart">
    <div className="relative ">

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 transition  hover:text-red-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span
            className="absolute  -top-3 -right-2 p-[1px] px-[4px] z-10 bg-slate-200
         marker: text-blackk opacity-90  text-sm rounded-full"
          >
        {cart?.size || 0}
          </span>
        </div>

{/*  <div className=" z-30 p-2 transition-all    absolute  -left-20 top-[52px] w-36 shadow-md rounded bg-green-100  overflow-hidden ">
        <h3 className="text-slate-800 text-xs font-semibold ">
          {cart?.size || 0} items
        </h3>
        <p className="text-xs text-slate-600 mb-1 ">
          Subtotal: € {cart?.subTotal}.00{" "}
        </p>
        <Link
          href="/"
          className="bg-gray-200 w-full px-3 p-1 uppercase rounded text-xs ml-1 transition hover:bg-gray-300 "
        >
          Go to cart
        </Link>
      </div> */} 
    </div>
    </Link>
  );
}

export default ShoppingCartButton;
