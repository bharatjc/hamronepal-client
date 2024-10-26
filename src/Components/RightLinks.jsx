import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEditCalendar } from "react-icons/md";
import { LuMailOpen } from "react-icons/lu";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function RightLinks() {
  return (
    <>
    <div className='fixed top-[50vh] right-0 text-white text-2xl'>
      <div className='bg-[#008C44] h-[50px] w-[60px] flex items-center justify-center'><FaPhone /></div>
      <div className='bg-[#9B4479] h-[50px] w-[60px] flex items-center justify-center'><MdOutlineEditCalendar /></div>
      <div className='bg-[#CA5A0D] h-[50px] w-[60px] flex items-center justify-center'><LuMailOpen />
      </div>
    </div>

    <div className='fixed top-[90vh] right-[30px] h-[39px] w-[44px] bg-[#008C44] flex justify-center items-center text-white rounded-lg'>
    <MdOutlineKeyboardArrowUp className='text-2xl'/>
    </div>
    </>
  )
}

export default RightLinks
