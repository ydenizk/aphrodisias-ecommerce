import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="mx-auto flex-col justify-center items-center ">
        <div className="w-screen mx-auto  flex  justify-center items-center h-[480px] bg-bgcolor text-center">
      <div className="flex-1 grid  justify-center items-center  mx-auto bg-gray-300  w-full h-full border-r border-gray-300">
             <div className="w-48 h-48 border-2 border-gray-500 rounded  relative mx-auto ml-4 rotate-90  ">
            <Image
              src="/logo-3.png"
              fill
              alt="logo"
              className="object-cover  absolute"
            />
          </div>
      </div>
     
          <div className="flex-1  w-full p-4 text-left "> 
            <h1 className=" font-serif uppercase text-2xl -mt-16  mb-4"> our story

            </h1>
            <p className="font-serif text-lg tracking-wide leading-7">  Founded by a family at 1976, we who shared a dream: to create a brand with purpose, self-sustainability and that delivers the highest quality to women.
The dream came true: it crossed our borders,reaching markets in USA, Europe aand Asia, to lead the bag market
For Aphrodisias, our creations are not just beautiful bags but rather works of art.

                </p>
          </div>
        </div>
        <div className=" h-[684px] relative mx-auto w-screen">
          <Image
            src="/banner-2.jpg"
            fill
            alt="about"
            className=" absolute object-cover"
          />
        </div>
      </div>
    </div>
  );
}
