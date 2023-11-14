"use client";

import React, { useContext} from "react";
import Navbar from "../navbar/navbar";
import SearchBar from "../searchBar/searchBar";
import { NavContext } from "@/context/NavContext";
import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

///burada server component olan shoppingcart button ı almak için children metodu kullandık.ÖNEMLİ!!çalışmıor yoksa
function TopSection({ children }) {
  const { setNavOpen, searchOpen, setSearchOpen, signInOpen, setSignInOpen } =
    useContext(NavContext);

  const { status, data: session } = useSession();
  const router = useRouter();

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
            <button
              className="mr-2 hidden lg:block"
              onClick={() => setNavOpen(true)}
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
            <button
              className="hidden lg:block "
              onClick={() => setSearchOpen(!searchOpen)}
            >
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

          <div className="w-48 h-24 relative  ">
            <Image
              src="/logo-3.png"
              fill
              alt="logo"
              className="object-cover "
            />
          </div>
        </div>

        <div className="flex justify-end items-center flex-1 ">
          {/* login sidenav section..... */}
          <div
            className="flex justify-center items-center relative cursor-pointer "
            onClick={() => setSignInOpen(!signInOpen)}
          >
            {status === "authenticated" ? (
              <Image
                src={session?.user?.image || "/gift.jpg"}
                alt="profile"
                width={30}
                height={30}
                className="rounded-full mr-2"
              />
            ) : (
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
            )}
            {/* sign in side  */}
            <div
              className={`absolute  -left-24 top-0 z-10  overflow-hidden  ${
                signInOpen ? "w-24  " : "w-0 hidden  "
              }     
              transition-all duration-400 bg-white`}
            >
              {status === "authenticated" ? (
                <button
                  onClick={() => signOut({callbackUrl:"/"})}
                  className=" transition hover:bg-gray-400   p-1 px-3 shadow-md text-black bg-gray-300 text-sm rounded ml-1"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => {
                    signIn();
                  }}
                  className=" transition hover:bg-gray-400  p-1 px-3 shadow-md text-black bg-gray-300 text-sm rounded ml-1"
                >
                  Sign in
                </button>
              )}
            </div>
            {/* sign in side  END */}
          </div>
          {/* login sidenav section.....END */}

          {/* Shopping Cart button...... */}
          {children}
          {/* Shopping Cart button...... */}
        </div>
      </div>
      {/* üst kısım SON.........*/}

      <Navbar />
    </div>
  );
}

export default TopSection;
