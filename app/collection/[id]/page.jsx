import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductPage() {
  return (
    <div className="w-full  flex justify-center items-center py-16  mx-auto  ">
      <div className="flex gap-16 mx-auto justify-center-items-center">
        <div className="w-[480px] bg-bgcolor h-[600px] relative border-8 border-bgcolor">
          <Image
            src="/bag-1.jpg"
            fill
            alt="cat"
            className="absolute object-contain"
          />
        </div>

        <div className="w-96  p-2 px-4 bg-bgcolor h-[600px]">
          <p className="text-sm font-light mb-8">Aphrodisias - Limited Edition Bags</p>
          <h1 className="text-2xl font-bold mb-4">Callisto Shoulder Bag</h1>
          <p className="mb-8 font-light">
            Perfect bag for your daily activities. Its ultra chic and holds all
            the essentials.Vibrant colors, statement details, explore a brand-new dimension 
            of our ICONIC BAG
          </p>
          <p className=" text-2xl font-light mb-2   ">€89.00</p>
          <p className="text-sm mb-20">inc. VAT, free delivery</p>
          <div className="text-xs font-extralight flex items-center justify-center text-red-900  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <p className="ml-1 "> Order today,shipped within 4 days</p>
          </div>

          <button className=" text-white mt-6 bg-blackk cursor-pointer transition hover:bg-gray-700 w-full border p-2">Add to Chart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
