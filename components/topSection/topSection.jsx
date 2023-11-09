"use client";

import React, { useContext, useState,useEffect } from "react";

import Navbar from "../navbar/navbar";
import SearchBar from "../searchBar/searchBar";
import { NavContext } from "@/context/NavContext";
import Image from "next/image";

function TopSection() {

  const{setNavOpen,searchOpen,setSearchOpen}=useContext(NavContext)

  

  return (
    <div className="w-full   ">
      {/* üst kısım...........*/}
      <div className="w-full h-20 flex  items-center border-b  ">
        <div className="flex-2 flex justify-between items-center ">
          <div className="flex items-center ">
            <div className="lg:hidden">
              <SearchBar />
            </div>

            {/* hamburger icon */}
            <button className="mr-2 hidden lg:block"
            onClick={()=>setNavOpen(true)}
            > 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>

            {/* hamburger END */}
            <button className="hidden lg:block " onClick={()=>setSearchOpen(!searchOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-sm "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>

          <div className="w-48 h-24 relative ">
       <Image src="/logo-3.png" fill alt="logo" className="object-cover " />
          </div>
        </div>

        <div className="flex justify-end items-center flex-1">
          {/* login sidenav section..... */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
                 {/* login sidenav section.....END */}
          <button>
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* üst kısım SON.........*/}

      <Navbar />
    </div>
  );
}

export default TopSection;
