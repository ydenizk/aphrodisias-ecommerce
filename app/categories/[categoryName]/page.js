import React from "react";
import Image from "next/image";
import Card from "@/components/card/card";
import { prisma } from "@/utils/prismaDb";

async function CategoryPage({params:{categoryName}}) {


  const category=await prisma.category.findUnique({
    where:{categoryName},
    include:{products:true}
  })
  

  return (
    <div className="w-full justify center items-center">
<div className="px-4 mx-auto">   
      <div className="flex gap-4 py-6 mx-2 justify-center xs:items-center  xs:gap-2 " >
        <div className="w-[720px] h-[420px] relative">
          <Image
            src={category.categoryImg}
            fill
            alt="cat"
            className="absolute object-cover"
          />
        </div>
        <div className="w-64">
          <h1 className="uppercase text-5xl h-full  w-fullfont-serif pr-2  sm:text-4xl  xs:text-3xl">
            The world of {category.catName}
          </h1>
        </div>
      </div>
      <div className="w-full text-left mt-10">
        <h1 className="text-3xl font-semibold tracking-wide capitalize">   {category.catName}</h1>
      </div>

      <div className="py-8 mb-8 grid grid-cols-4  justify-center  mmd:grid-cols-2
       mmd:gap-10  xs:gap-6   ">
     {category?.products.map((product)=>{

      return(<Card product={product} key={product.id}  />)
     })}
      </div>
      </div>
    </div>
  );
}

export default CategoryPage;
