"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Fashion() {
  const refh1 = useRef(null);
  const refSecondParagraph = useRef(null);
  const refImage = useRef(null);
  const [isVisibleFirst, setIsVisibleFirst] = useState(false);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  const [isVisibleImage, setIsVisibleImage] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Iterate over each entry
        entries.forEach((entry) => {
          // Use the entry's target to determine which element is intersecting
          if (entry.target === refh1.current) {
            setIsVisibleFirst(entry.isIntersecting);
          } else if (entry.target === refSecondParagraph.current) {
            setIsVisibleSecond(entry.isIntersecting);
          } else if (entry.target === refImage.current) {
            setIsVisibleImage(entry.isIntersecting);
          }
        });
      },
      {
        // Adjust the rootMargin as needed
        threshold: [0.2],
      }
    );

    // Observe both paragraphs
    if (refh1.current) {
      observer.observe(refh1.current);
    }
    if (refSecondParagraph.current) {
      observer.observe(refSecondParagraph.current);
    }
    if (refImage.current) {
      observer.observe(refImage.current);
    }

    // Clean up the observer
    return () => {
      if (refh1.current) {
        observer.unobserve(refh1.current);
      }
      if (refSecondParagraph.current) {
        observer.unobserve(refSecondParagraph.current);
      }
      if (refImage.current) {
        observer.unobserve(refImage.current);
      }
    };
  }, []);

  const firstParagraphClasses = isVisibleFirst
    ? "translate-y-[-60px] opacity-100"
    : "translate-y-0 opacity-0";
  const secondParagraphClasses = isVisibleSecond
    ? "translate-y-[-60px] opacity-100"
    : "translate-y-0 opacity-0";
  const ImageClasses = isVisibleImage
    ? "translate-x-0 "
    : "-translate-x-[500px]";

  return (
    <div className="flex  items-center justify-center my-8 mmd:border-b mmd:pb-20 ">
      <div className=" w-full grid grid-cols-2 mx-8 gap-2 mmd:grid-cols-1 mmd:gap-24 mmd:mx-0  ">
        <div ref={refImage} className="relative  w-[540px] h-[819px] mx-auto
        xl:w-[480px] xl:h-[720px] mmd:w-[540px]   sm:w-[440px] sm:h-[640px]
        ">
          <Image
            src="/fashion-2.jpg"
            fill
            className={`transition-transform duration-700  ${ImageClasses}`}
            alt="fashion"
          />
        </div>
        {/*  <div className="flex justify-center items-center h-full w-full px-4 tracking-wide"> */}

        <div
          className="flex justify-center items-center h-full w-full px-4 
            tracking-wide text-center ml-2 xl:text-right mmd:text-center"
         >
          <div>
            <h1
              ref={refh1}
              className={`text-6xl text-center uppercase font-serif mb-16 leading-relaxed 
              transition-all duration-500 lg:text-4xl xl:text-right mmd:text-center mmd:mb-12  ${firstParagraphClasses}`}
            >
              Experience ONE OF A KIND
            </h1>
            <p
              ref={refSecondParagraph}
              className={`leading-6 text-center text-sm xl:text-right  mmd:text-center  transition-all duration-500    ${secondParagraphClasses}`}
            >
              Aphrodisias sells a variety of beautifully made, modern and daily
              pieces with the most incredible stand-out bags. What makes Sorena
              so common is that every single bag is handmade by carefully
              approach.
            </p>
            <Link
              href="/"
              className="border border-black p-3 transition hover:bg-slate-100   "
            >
              See the Whole Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fashion;
