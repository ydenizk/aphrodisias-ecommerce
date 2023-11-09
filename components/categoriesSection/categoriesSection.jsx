import React from "react";
import Image from "next/image";
import Link from "next/link";

function CategoriesSection() {
  return (
    <div className=" my-20">
<h1 className="text-5xl font-serif font-semibold w-full text-center">30 years of creating Modern bags </h1>
  
    <div className="w-full  flex justify-center items-center my-10">
      <div className="grid grid-cols-2 items-center content-center justify-items-center gap-10 mx-auto ">
        <div className="w-[480px] h-[360px] relative">
          <Image
            src="/shoulder-2.jpg"
            fill
            alt="cat"
            className="absolute object-contain"
          />

          <Link
            href=""
            className="border absolute border-white  text-white trascking wide p-2
              bottom-8 right-4 transition-all hover:border-2 cursor-pointer  "
          >
            Shoulder bags
          </Link>
        </div>
        <div className="w-[480px] h-[360px] relative">
          <Image
            src="/daypack.jpg"
            fill
            alt="cat"
            className="absolute object-contain"
          />

          <Link
            href=""
            className="border absolute border-white  text-white trascking wide p-2
              bottom-8 right-4 transition-all hover:border-2 cursor-pointer  "
          >
            Daypacks
          </Link>
        </div>
        <div className="w-[480px] h-[360px] relative">
          <Image
            src="/washbag-1.jpg"
            fill
            alt="cat"
            className="absolute object-cover"
          />

          <Link
            href=""
            className="border absolute border-white  text-white trascking wide p-2
              bottom-8 right-4 transition-all hover:border-2  cursor-pointer  "
          >
            Washbags
          </Link>
        </div>
        <div className="w-[480px] h-[360px] relative">
          <Image
            src="/sports.jpg"
            fill
            alt="cat"
            className="absolute object-cover"
          />

          <Link
            href=""
            className="border absolute border-white  text-white trascking wide p-2
              bottom-8 right-4 transition-all hover:border-2   cursor-pointer"
          >
            Sports bags
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CategoriesSection;
