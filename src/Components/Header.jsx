import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <>
    <div className='h-[105px] w-full grid grid-cols-4 px-[15px]'>
   <div className='px-[15px] flex justify-center'><img className='w-[265px] h-[52px] mt-[15px]' src="../logo-1.png" alt="" /></div>
   <div className='px-[15px] flex justify-end'><img src="../logo-slogan.png" alt="" className='my-[15px] mr-[30px] ml-[20px] w-[107px] h-[70px]'/></div>
   <div className='col-span-2 flex items-end px-[15px] mb-1'>
    <ul className='flex justify-end w-full text-[13px] gap-4 text-gray-600'>
      <li className='flex items-center gap-2'>
      <CiMail className='text-green-500 text-[18px]'/>FAQ's</li>
      <li className='flex items-center gap-2'>
      <img src="../american-flag.png" alt="" className='w-[16px] h-[11px]'/>English</li>
      <li className='flex items-center gap-2'>
      <img src="../nepal-flag.png" alt="" className='w-[16px] h-[11px]'/>नेपाली</li>  
      <div className='ml-4'>
        <ul className='flex gap-2 text-white'>
          <li className='w-[25px] h-[25px] rounded-xl bg-[#2850B6] flex items-center justify-center'><FaFacebookF/></li>
          <li className='w-[25px] h-[25px] rounded-xl bg-[#2CC1E9] flex items-center justify-center'><FaTwitter /></li>
          <li className='w-[25px] h-[25px] rounded-xl bg-[#772A90] flex items-center justify-center'><FaInstagram /></li>
        </ul>
      </div>
    </ul>
   </div>
    </div>

    <div className='bg-[#008C44] h-[54px] px-[15px] sticky top-0 z-10'>
      <ul className='flex justify-between px-[20px] items-center h-full w-[95%] text-[15px] font-semibold text-white'>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>SERVICES</li>
        <li>NEWS & ACTIVITIES</li>
        <li>PUBLICATION</li>
        <li>BRANCHES</li>
        <li>GALLERY</li>
        <li>CAREER</li>
        <li>CSR</li>
        <li>Contact US</li>
      </ul>
    </div>
    </>
  )
}

export default Header