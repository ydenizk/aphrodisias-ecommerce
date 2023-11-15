import React from 'react'

function ContactPage() {
  return (
    <div className='w-full mx-auto  bg-gray-200 border-b'>

<div className=' w-full mx-auto flex-col justify-center items-center py-20 '>
    <div className='max-w-lg px-4 mb-4   w-full  mx-auto'>
        <h1 className='font-xl uppercase font-semibold text-blackk'>Contact Us</h1>
    </div>
<form
        className="flex flex-col gap-2 justify-center items-center bg-white 
          w-full max-w-[480px] mx-auto    shadow-md p-2 py-6 "
      >
        <div className=" w-[400px]">
          <input
            className="w-[400px] h-12 p-1 text-blackk text-lg border-b border-slate-500 rounded outline-none"
            type="text"
            id="name"
            required
            placeholder="Name"
          />
        </div>
        <div>
          <input
            required
            id="email"
            type="email"
            placeholder="Email"
            className="w-[400px] h-12 p-1 text-blackk text-lg border-b border-slate-500 rounded  outline-none"
          />
        </div>
        <div className="lg:text-center">
          <textarea
            required
            id="message"
            cols="45"
            rows="8"
            placeholder="Message"
            className="rounded text-blackk p-1 outline-none border-b border-slate-500 "
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full max-w-[400px] rounded bg-gray-500  hover:bg-gray-600 transition duration-300  py-2 tracking-wide text-xl cursor-pointer  text-stone-200"
        >
          Send
        </button>
      </form>
</div>
    </div>
  )
}

export default ContactPage