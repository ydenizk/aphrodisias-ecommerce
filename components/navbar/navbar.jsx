"use client";

import React, { useContext } from "react";
import { NavContext } from "@/context/NavContext";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../searchBar/searchBar";

function Navbar() {
  const { open, setOpen, searchOpen } = useContext(NavContext);

  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`w-full flex justify-center items-center h-16 transition-all border-b
     lg:bg-bgcolor   ${
       searchOpen ? "lg:h-16 lg:overflow-visible" : "lg:h-0 lg:overflow-hidden"
     } `}
    >
      <div className="w-full  text-center mx-auto  hidden lg:block">
        <SearchBar />
      </div>

      <ul className=" flex justify-center items-center w-3/5 relative z-50 lg:hidden   ">
        <li className="px-2 tracking-wide">
          <Link
            href="/"
            className="hover:text-red-700 transition uppercase font-bold"
          >
            Home
          </Link>
        </li>
        <li
          className="px-2 tracking-wide uppercase font-bold transition hover:text-red-700   flex items-center relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Bags
          {/* Dropdown menu */}
          {open && (
            <div className="absolute top-2 -left-4   ">
              <ul className=" w-64 text-customWhite border bg-white  mt-9  ">
                <li className="p-2 px-6 flex  items-center gap-3 my-1 text-black   ">
                  <Image
                    src="/gift.jpg"
                    width={35}
                    height={35}
                    alt="gift"
                    className="border rounded "
                  />
                  <Link
                    href="/bags/"
                    className="whitespace-nowrap text-base  capitalize font-light  transition hover:text-red-800 "
                  >
                    Shoulder bags
                  </Link>
                </li>
                <li className="p-2 px-6 flex  items-center gap-3 my-1 text-black   ">
                  <Image
                    src="/gift.jpg"
                    width={35}
                    height={35}
                    alt="gift"
                    className="border rounded "
                  />
                  <Link
                    href="/bags/"
                    className="whitespace-nowrap text-base  capitalize font-light  transition hover:text-red-800 "
                  >
                    Shoulder bags
                  </Link>
                </li>
                <li className="p-2 px-6 flex  items-center gap-3 my-1 text-black   ">
                  <Image
                    src="/gift.jpg"
                    width={35}
                    height={35}
                    alt="gift"
                    className="border rounded "
                  />
                  <Link
                    href="/bags/"
                    className="whitespace-nowrap text-base  capitalize font-light  transition hover:text-red-800 "
                  >
                    Shoulder bags
                  </Link>
                </li>
                <li className="p-2 px-6 flex  items-center gap-3 my-1 text-black   ">
                  <Image
                    src="/gift.jpg"
                    width={35}
                    height={35}
                    alt="gift"
                    className="border rounded "
                  />
                  <Link
                    href="/bags/"
                    className="whitespace-nowrap text-base  capitalize font-light  transition hover:text-red-800 "
                  >
                    Shoulder bags
                  </Link>
                </li>
                <li className="p-2 px-6 flex  items-center gap-3 my-1 text-black   ">
                  <Image
                    src="/gift.jpg"
                    width={35}
                    height={35}
                    alt="gift"
                    className="border rounded "
                  />
                  <Link
                    href="/bags/"
                    className="whitespace-nowrap text-base  capitalize font-light  transition hover:text-red-800 "
                  >
                    Shoulder bags
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {/* Dropdown END */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 font-bold  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </li>
        <li className="px-2 tracking-wide">
          <Link
            href="/menu"
            className="hover:text-red-700 transition uppercase font-bold "
          >
            Collection
          </Link>
        </li>
        <li className="px-2 tracking-wide">
          <Link
            href="/#kartal"
            className="hover:text-red-700 transition uppercase font-bold scroll-smooth"
          >
            About
          </Link>
        </li>

        <li className="px-2 tracking-wide">
          <Link
            href="/contact"
            className="whitespace-nowrap hover:text-red-700 transition uppercase font-bold"
          >
            Gift Cards
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
