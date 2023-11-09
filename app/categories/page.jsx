import React from "react";
import Image from "next/image";
import Card from "@/components/card/card";

function CategoryPage() {
  return (
    <div className="w-full mx-4">
      <div className="flex gap-8 py-6 ">
        <div className="w-[640px] h-[426px] relative">
          <Image
            src="/shoulder-2.jpg"
            fill
            alt="cat"
            className="absolute object-contain"
          />
        </div>
        <div className="w-64">
          <h1 className="uppercase text-5xl h-full  w-fullfont-serif  ">
            The world of Shoulder bags{" "}
          </h1>
        </div>
      </div>
      <div className="w-full text-left mt-10">
        <h1 className="text-3xl font-semibold tracking-wide">Shoulder bags</h1>
      </div>

      <div className="py-8 mb-8 grid grid-cols-4  items-center mmd:grid-cols-2 mmd:gap-10  xs:gap-20">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default CategoryPage;
