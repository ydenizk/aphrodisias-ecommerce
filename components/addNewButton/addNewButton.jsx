"use client"
import React from 'react'
import { useFormStatus } from "react-dom";

export default function AddNewButton() {

const{pending}=useFormStatus()

  return (
  <button type='submit '
  disabled={pending}
  className='p-1 px-4 bg-blackk text-slate-100  hover:bg-slate-800 transition 
  border rounded'
  > 
  {pending ? "LOADING...":" Add New Product"} 

  </button>
  )
}
