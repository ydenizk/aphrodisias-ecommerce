"use client"


import React from 'react'
import Link from 'next/link'
import { useSession} from "next-auth/react";


function TopContact() {


    const { status, data: session } = useSession();


  return (
    <div className='w-full'>
   <div className="w-full h-8 border-b text-right leading-8 flex items-center justify-end ">

    {status==="authenticated" && (
        <Link href="/addNew" className='  text-right text-xs py-[2px] px-2 border rounded bg-orange-300
         text-gray-700 transition hover:bg-orange-400'>Add New</Link>
    )}

                <Link href="/contact" className="w-24 text-sm ml-4 ">
                  Contact us
                </Link>
              </div>



    </div>
  )
}

export default TopContact