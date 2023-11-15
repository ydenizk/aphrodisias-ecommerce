import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ImTwitter, ImFacebook } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full  ">
      <div className="mx-auto  ">
        <div className=" bg-bgcolor h-64 flex justify-center items-center ">
          <div className="w-48 h-48 border-2 border-gray-500 rounded full relative mx-auto ml-4 sm:hidden ">
            <Image
              src="/logo-3.png"
              fill
              alt="logo"
              className="object-cover "
            />
          </div>

          <div className="flex-2 flex justify-evenly items-center h-full">
            <div className="  h-full mt-32">
              <h1 className="uppercase text-xl font-bold tracking-wide mb-3  ">
                THE BRAND
              </h1>

              <ul className="  ">
                <li className="px-1 tracking-wide  ">
                  <Link href="/about ">Our Story</Link>
                </li>
                <li className="px-1 tracking-wide">
                  <Link href="/contact" className="whitespace-nowrap">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="h-full mt-[124px] ">
              <h1 className="uppercase text-xl font-bold tracking-wide mb-3  ">
                CHECKOUT
              </h1>

              <ul className="  ">
                <li className="px-2 tracking-wide  ">
                  <Link href="/collection ">Collection 2024 </Link>
                </li>
                <li className="px-2 tracking-wide">
                  <Link href="/categories/giftcards" className="whitespace-nowrap">
                    Gift cards
                  </Link>
                </li>
                <li className="px-2 tracking-wide">
                  <Link href="/cart" className="whitespace-nowrap">
                    Go to Cart
                  </Link>
                </li>
                <li className="px-2 tracking-wide">
                  <Link href="/contact" className="whitespace-nowrap">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white h-16 flex items-center px-4 ">
        <h1 className="text-xs   text-gray-500 tracking-wide whitespace-nowrap ">
          &copy;All rights reserved by YdenizK 2023.
        </h1>
        <div className="t w-full flex justify-center items-center ">
          <Link href="https://twitter.com/home" className="">
            <ImTwitter className="text-gray-700 text-2xl  " />
          </Link>
          <Link href="https://www.facebook.com" className="mx-8">
            <ImFacebook className="text-gray-700 text-2xl " />
          </Link>
          <Link href="https://instagram.com/" className="">
            <FaInstagramSquare className="text-gray-700 text-2xl " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
