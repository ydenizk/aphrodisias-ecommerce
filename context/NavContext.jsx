"use client"

import { createContext,useState } from "react"

export const NavContext=createContext()

export const NavProvider=({children})=>{

const[navOpen,setNavOpen]=useState(false)  //for Sidebar
const [open, setOpen] = useState(false); //for Dropdown
const[searchOpen,setSearchOpen]=useState(false) //for responsive searchbar section

    return(
        <NavContext.Provider value={{navOpen,setNavOpen,open,setOpen,setSearchOpen,searchOpen}}>

            {children}
        </NavContext.Provider>

    )
}