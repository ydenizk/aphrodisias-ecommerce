import React from "react";
import Image from "next/image";
import Link from "next/link";

function CategoriesSection() {
  return (
    <div className=" my-20 sm:my-10">
<h1 className="text-5xl font-serif font-semibold w-full sm:text-4xl mb-16  text-center">30 years of creating Modern bags </h1>
  
    <div className="w-full  flex justify-center items-center my-10">
      <div className="grid grid-cols-2 items-center content-center justify-items-center  
      gap-x-8 mx-auto  mmd:grid-cols-1 ">
        <div className="w-[480px] h-[360px] relative  group overflow-hidden group lg:w-[420px] lg:h-[315px] mb-8
        mmd:w-[480px] mmd:h-[320px] ">
          <Image
            src="/shoulder-2.jpg"
            fill
            alt="cat"
            className="absolute object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <Link
            href="/categories/shoulderbags"
            className="border absolute border-white  text-white trascking wide p-2
              bottom-8 right-4 transition-all hover:opacity-70  cursor-pointer xs:bottom-3 xs:right-14 "
          >
            Shoulder Bags
          </Link>
        </div>
        <div className="w-[480px] h-[360px] relative overflow-hidden group lg:w-[420px] 
        lg:h-[315px] mb-8  mmd:w-[480px] mmd:h-[320px]">
          <Image
            src="/daypack.jpg"
            fill
            alt="cat"
            className="absolute transition-transform duration-500 group-hover:scale-110 object-cover"
          />

          <Link
            href="/categories/daypacks"
            className="border absolute border-white  text-white trascking wide p-2
              bottom-8 right-4 transition-all hover:opacity-70  cursor-pointer  xs:bottom-3 xs:right-14"
          >
            Daypacks
          </Link>
        </div>
        <div className="w-[480px] h-[360px] relative overflow-hidden group lg:w-[420px] lg:h-[315px] mb-8  mmd:w-[480px] mmd:h-[320px]">
          <Image
            src="/sports.jpg"
            fill
            alt="cat"
            className="absolute transition-transform duration-500 group-hover:scale-110 object-cover"
          />

          <Link
            href="/categories/travelbags"
            className="border absolute border-white  text-white trascking wide p-2
              bottom-8 right-4 transition-all hover:opacity-70   cursor-pointer xs:bottom-3 xs:right-14"
          >
           Travel Bags
          </Link>
        </div>
        <div className="w-[480px] h-[360px] relative overflow-hidden group lg:w-[420px] lg:h-[315px] mb-8  mmd:w-[480px] mmd:h-[320px]">
          <Image
            src="/gifts.jpg"
            fill
            alt="cat"
            className="absolute transition-transform duration-500 group-hover:scale-110 object-cover "
          />

          <Link
            href="/categories/giftcards"
            className="border absolute border-white  text-white trascking wide p-2
              bottom-8 right-4 transition-all hover:opacity-70    cursor-pointer xs:bottom-3 xs:right-14"
          >
         GIFTCARDS
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CategoriesSection;
