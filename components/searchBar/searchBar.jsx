
"use client"
import React from "react";
import { useRouter } from 'next/navigation';

 function SearchBar() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.searchQuery.value;
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };


  return (
    <form
/*     action={searchProducts} */
onSubmit={handleSubmit}
  
      className="flex p-1 border bg-white shadow-none w-80 h-12 gap-1 lg:w-96  lg:mx-auto  "
    >
      <input
        name="searchQuery"
        type="text"
        placeholder="Search"
        className=" px-1 outline-none w-full h-full text-lg text-slate-800"
      />
    <button type="submit">
 <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-sm" 
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

    </button>
       
     
    </form>
  );
}

export default SearchBar;
