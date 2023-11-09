import React from "react";
import Card from "@/components/card/card";
import Fashion from "@/components/fashion/fashion";
import CategoriesSection from "@/components/categoriesSection/categoriesSection";


export default function Home() {


  
  return (
    <main className="w-full flex flex-col  justify-center items-center overflow-x-hidden  ">
      <div className="w-full  flex justify-center items-center py-6  z-auto bg-bgcolor ">
        <div className="w-4/5 h-[520px]   bg-banner bg-cover  relative z-0  "></div>
      </div>

      {/* Featured card */}
      <div className="w-full flex justify-center items-center">
        <div className="px-4 py-20 w-full">
          <h1 className="text-3xl font-bold w-full text-left sm:text-center">
            Most Featured Bags
          </h1>
          <div className="py-12 grid grid-cols-4 items-center mmd:grid-cols-2 mmd:gap-y-10 xs:gap-y-20">
    
              <Card />
              <Card />
              <Card />
              <Card />
      
          </div>
        </div>
      </div>
      <Fashion />
      <CategoriesSection />
    </main>
  );
}
