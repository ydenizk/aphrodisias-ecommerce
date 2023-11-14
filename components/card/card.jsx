import React from "react";
import Image from "next/image";
import Link from "next/link";


function Card({product}) {
  //const{name,description,imgUrl,price,catname,createdAt}=product

const isNew=Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 *60 * 24 * 15


  return (
    <div className="flex flex-col gap-2 items-center text-center mb-16">
      <div className="h-auto w-auto p-10  bg-bgcolor xl:p-4 lg:p-1 mmd:p-10 sm:p-2 xs:p-1">
        <Link href={`/collection/${product.id}`}>
          <div className="h-60 w-48  relative mx-auto xs:h-48 xs:w-36">
          <Image
            src={product.imgUrl}
            fill
            alt="card"
            className="absolute object-cover "
          />
        </div>
        </Link>
      
      </div> 
     <div className="w-full">
      
       </div>
      <div className="w-72  px-2 xl:w-60 lg:w-56 mmd:w-72 sm:w-64 xs:w-40 ">
        <h3 className=" capitalize font-semibold w-full text-left lg:text-xs lg:text-center mmd:text-left
        mmd:text-sm sm:text-center sm:text-xs">{product.name} {isNew && (<span className="ml-1 text-xs px-1 border rounded bg-orange-500 text-gray-800">NEW</span>)}
        </h3>
        <div className="text-xs font-extralight flex items-center justify-start text-red-900  w-full lg:flex-col mmd:flex-row sm:flex-col ">
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
          <p className="ml-1"> Order today,shipped within 4 days</p>
        </div>
        <div className="w-full flex  justify-between items-center mt-2 xl:flex-col mmd:flex-row sm:flex-col">
          <p className="font-bold ">€{product.price}.00</p>

          <p className="font-normal text-sm xl:text-xs">inc. VAT, free delivery </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
