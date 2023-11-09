import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/card/card';

function CollectionPage() {
  return (
    <div className="w-full mx-4">
    <div className="flex-col-reverse justify-center items-center gap-8 py-6 mx-auto w-full ">
    <div className="w-full text-center mb-8">
        <h1 className="uppercase text-5xl h-full  w-fullfont-serif  ">
 The whole collection of upcoming 2024
        </h1>
      </div>
      <div className="w-[720px] h-[480px] relative mx-auto">
        <Image
          src="/collection.jpg"
          fill
          alt="cat"
          className="absolute object-contain"
        />
      </div>
    
    </div>
    <div className="w-full text-left mt-10">
      <h1 className="text-3xl font-semibold tracking-wide">Entire Collection 2024</h1>
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

export default CollectionPage