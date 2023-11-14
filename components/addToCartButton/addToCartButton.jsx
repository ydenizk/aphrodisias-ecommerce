"use client";

import React, { useState, useTransition } from "react";

export default function AddToCartButton({ productId, incrementProductQty }) {
  //client component de server action çağırdığımız için usetransisition kullanılması gereıyormus.
  //error ve loading statte(pending) ihallediyor  yapıyor
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="mt-6 w-full ">
      <button
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQty(productId);
            setSuccess(true);
          });
        }}
        className=" text-white flex items center justify-center bg-blackk cursor-pointer transition hover:bg-gray-700 w-full border p-2 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <h3 className="ml-2">Add to Cart</h3>
      </button>
      {isPending &&  <p className=" font-light uppercase mt-2 text-center mx-auto ">
       Loading.....
      </p>}
      {!isPending && success && (
    <p className="text-green-900 font-light text-center mx-auto text-sm mt-2">
        Added to Cart succesfully
      </p>
        
      )}
  
    </div>
  );
}
