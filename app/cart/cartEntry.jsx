"use client";

import React, { useTransition } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQty,
}) {
  const [isPending, startTransition] = useTransition();

  const qtyOptions = [];

  for (let i = 1; i <= 15; i++) {
    qtyOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="w-full grid grid-cols-4 justify-center items-center mb-4 flex-2 mx-8 ">
      <div className="w-24 h-32 relative border-4 border-bgcolor">
        <Image src={product.imgUrl} fill alt="pic" className="object-cover  " />
      </div>

      <div>
        <h1 className=" font-light pr-4  ">{product.name}</h1>
      </div>
      <h1 className=" font-semibold">€ {product.price}.00 </h1>
      <select
        className="outline-none w-full max-w-[50px] border bg-white "
        defaultValue={quantity}
        onChange={(e) => {
          const newQty = parseInt(e.currentTarget.value);
          startTransition(async () => {
            await setProductQty(product.id, newQty);
          });
        }}
      >
        <option value={0}>0</option>
        {qtyOptions}
      </select>

      {/*  <button className="text-lg font-semibold">X</button> */}
    </div>
  );
}
