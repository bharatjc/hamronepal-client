import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEditCalendar } from "react-icons/md";
import { LuMailOpen } from "react-icons/lu";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function RightLinks() {
  return (
    <>
      <div className='fixed top-[50vh] right-0 text-white text-2xl'>

        <div className='group relative'>
          <div className='absolute ml-[-100px] text-white hidden group-hover:flex'>
            <span className="bg-[#008C44] px-4 h-[50px] text-[16px] flex items-center">23 545355</span>
          </div>
          <div className='bg-[#008C44] h-[50px] w-[60px] flex items-center justify-center'><FaPhone /></div>
        </div>


        <div className='group relative'>
          <div className='absolute ml-[-70px] hidden text-white group-hover:flex'>
            <span className="bg-[#9B4479] px-4 h-[50px] text-[16px] flex items-center">Events</span>
          </div>
          <div className='bg-[#9B4479] h-[50px] w-[60px] flex items-center justify-center'><MdOutlineEditCalendar /></div>
        </div>


        <div className='group relative'>
          <div className='absolute ml-[-240px] text-white hidden group-hover:flex'>
            <span className="bg-[#CA5A0D] px-4 h-[50px] text-[16px] flex items-center">hamronepalcoop@gmail.com</span>
          </div>
          <div className='bg-[#CA5A0D] h-[50px] w-[60px] flex items-center justify-center'><LuMailOpen /></div>
        </div>
      </div>


      <div className='fixed top-[90vh] right-[30px] h-[39px] w-[44px] bg-[#008C44] flex justify-center items-center text-white rounded-lg'>
        <MdOutlineKeyboardArrowUp className='text-2xl'/>
      </div>
    </>
  );
}

export default RightLinks;
