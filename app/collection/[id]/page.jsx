import React,{cache} from "react";
import Image from "next/image";

import { prisma } from "@/utils/prismaDb";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/addToCartButton/addToCartButton";
import { incrementProductQty } from "@/components/addToCartButton/cartButtonAction";


const getProduct=cache(async(id)=>{
 const product = await prisma.product.findUnique({
    where: { id },
  });
  if (!product) notFound();
  return product
})
 


export async  function generateMetadata({params:{id}}){
const product=await getProduct(id)


return {
  title:product.name + " - APHRODISIAS",
  description:product.description
}
}





async function ProductPage({ params: { id } }) {
  const product=await getProduct(id)





  return (
    <div className="w-full  flex justify-center items-center py-16  mx-auto  ">
      <div className="flex gap-16 mx-auto justify-center-items-center">
        <div className="w-[480px] bg-bgcolor h-[600px] relative border-8 border-bgcolor">
          <Image
            src={product.imgUrl}
            fill
            alt="cat"
            className="absolute object-contain"
          />
        </div>

        <div className="w-96  p-2 px-4 bg-bgcolor h-[600px]">
          <p className="uppercase  font-light mb-8 "> {product.catName} </p>
          <h1 className="text-2xl font-bold mb-4">{product.name} </h1>
          <p className="mb-8 font-light">{product.description}</p>
          <p className=" text-2xl font-light mb-2   ">€{product.price}.00 </p>
          <p className="text-sm mb-20">inc. VAT, free delivery</p>
          <div className="text-xs font-extralight flex items-center justify-center ">
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

        <AddToCartButton productId={product.id} incrementProductQty={incrementProductQty}/>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
