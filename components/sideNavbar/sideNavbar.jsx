"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavContext } from "@/context/NavContext";

function SideNavbar() {
  const { navOpen, setNavOpen } = useContext(NavContext);

  return (
    <div
      className={`absolute top-0 left-0 z-10 h-screen w-0 overflow-hidden  transition-all
     bg-bgcolor  ${navOpen && "w-80"} `}
    >
      <div className="flex justify-between p-2">
        <h3 className="font-semibold text-lg">Menu</h3>
        <button onClick={() => setNavOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul className="  justify-center items-center w-full my-10   ">
        <li className="pl-10 border-b py-[10px] tracking-wide ">
          <Link
            href="/"
            className="hover:text-red-800 transition uppercase font-bold"
          >
            Home
          </Link>
        </li>
        <li className="pl-10 border-b py-[10px] tracking-wide ">
          <Link
            href="/about"
            className="whitespace-nowrap hover:text-red-800 transition uppercase font-bold "
          >
            Bags
          </Link>
          {/* dropdown menu */}

          <ul className=" w-64 text-customWhite  bg-bgcolor  mt-4  ">
            <li className="p-2 px-6   my-1 text-black   ">
              <Link
                href="/bags/"
                className="whitespace-nowrap text-base  capitalize font-semibold transition hover:text-red-800 "
              >
                Shoulder bags
              </Link>
            </li>
            <li className="p-2 px-6  font-semibold my-1 text-black   ">
              <Link
                href="/bags/"
                className="whitespace-nowrap text-base  capitalize font-semibold transition hover:text-red-800 "
              >
                Shoulder bags
              </Link>
            </li>
            <li className="p-2 px-6  font-semibold my-1 text-black   ">
              <Link
                href="/bags/"
                className="whitespace-nowrap text-base  capitalize font-semibold transition hover:text-red-800 "
              >
                Shoulder bags
              </Link>
            </li>
            <li className="p-2 px-6  font-semibold my-1 text-black   ">
              <Link
                href="/bags/"
                className="whitespace-nowrap text-base  capitalize font-semibold transition hover:text-red-800 "
              >
                Shoulder bags
              </Link>
            </li>
            <li className="p-2 px-6  font-semibold my-1 text-black   ">
              <Link
                href="/bags/"
                className="whitespace-nowrap text-base  capitalize font-semibold transition hover:text-red-800 "
              >
                Shoulder bags
              </Link>
            </li>
          </ul>

          {/* dropdown menu......END..... */}
        </li>
        <li className="pl-10 border-b py-[10px] tracking-wide ">
          <Link
            href="/menu"
            className="hover:text-red-800 transition uppercase font-bold "
          >
            Collection
          </Link>
        </li>
        <li className="pl-10 border-b py-[10px] tracking-wide ">
          <Link
            href="/#kartal"
            className="hover:text-red-800 transition uppercase font-bold scroll-smooth"
          >
            About
          </Link>
        </li>

        <li className="pl-10 border-b py-[10px] tracking-wide flex items-center">
          <Link
            href="/contact"
            className="whitespace-nowrap hover:text-red-800 transition uppercase font-bold pr-2"
          >
            Gift Cards
          </Link>
          <Image
            src="/gift.jpg"
            width={40}
            height={40}
            alt="gift"
            className="rounded-full bg-bgcolor"
          />
        </li>
      </ul>

      <div className="w-full h-8  px-2 mt-8 ">
        <Link href="/contact" className="w-full font-light ">
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default SideNavbar;
