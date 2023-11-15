import React from "react";
import Image from "next/image";
import Card from "@/components/card/card";
import { prisma } from "@/utils/prismaDb";

async function CollectionPage() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="w-full  flex justify-center items-center">
      <div className="mx-4 xs:text-center xs:mx-1">
        <div className="flex-col-reverse justify-center items-center gap-8 py-6 mx-auto w-full  ">
          <div className="w-[840px] h-[520px] relative mx-auto mmd:w-[680px] mmd:h-[420px]  sm:w-[480px] sm:h-[320px] ">
            <Image
              src="/collectionn.jpg"
              fill
              alt="cat"
              className="absolute object-contain"
            />
            <h1 className=" absolute uppercase text-4xl max-w-lg   w-full font-serif 
            left-12 top-80 text-gray-300  opacity-80   sm:left-6 sm:top-48 sm:text-2xl xs:opacity-90 ">
              The whole collection of upcoming 2024
            </h1>
          </div>
        </div>
        <div className="w-full text-left mt-10   ">
          <h1 className="text-3xl font-semibold tracking-wide w-full xs:text-center">
            Entire Collection 2024
          </h1>
        </div>

        <div className="py-8 mb-8 grid grid-cols-4  items-center mmd:grid-cols-2 mmd:gap-10  xs:gap-0 xs:px-16 xs:j-center">
          {products.map((product) => {
            return <Card product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
