import React from 'react'
import { FaCalculator } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { MdNoteAlt } from "react-icons/md";

function Links() {
  return (
    <div className='pb-[50px] px-[18px]'>
<div className='flex flex-wrap justify-center items-center mt-2 md:mt-20 gap-10'>
<div className='h-[200px] w-[160px] p-[16px] flex flex-col items-center justify-between shadow-md rounded-md'>
  <div className='h-[80px] w-[51px] flex justify-center items-center'>
  <FaCalculator className='h-full w-full text-[#2CB02C]'/>
  </div>
<h2 className='text-[#474747] font-extrabold mt-[16px] mb-[8px]'>EMI</h2>
<p className='mb-[16px] font-semibold text-[#474242]'>Calculator</p>
</div>

<div className='h-[200px] w-[160px] p-[16px] flex flex-col items-center justify-between shadow-md rounded-md'>
  <div className='h-[80px] w-[51px] flex justify-center items-center'>
  <BsCurrencyExchange className='h-full w-full text-[#2CB02C]'/>
  </div>
<h2 className='text-[#474747] font-extrabold mt-[16px] mb-[8px]'>Foreign</h2>
<p className='mb-[16px] font-semibold text-[#474242]'>Exchange Rate</p>
</div>

<div className='h-[200px] w-[160px] p-[16px] flex flex-col items-center justify-between shadow-md rounded-md'>
  <div className='h-[80px] w-[51px] flex justify-center items-center'>
  <FaRegCalendarAlt className='h-full w-full text-[#2CB02C]'/>
  </div>
<h2 className='text-[#474747] font-extrabold mt-[16px] mb-[8px]'>Date</h2>
<p className='mb-[16px] font-semibold text-[#474242]'>Converter</p>
</div>

<div className='h-[200px] w-[160px] p-[16px] flex flex-col items-center justify-between shadow-md rounded-md'>
  <div className='h-[80px] w-[51px] flex justify-center items-center'>
  <FaLink className='h-full w-full text-[#2CB02C]'/>
  </div>
<h2 className='text-[#474747] font-extrabold mt-[16px] mb-[8px]'>Important</h2>
<p className='mb-[16px] font-semibold text-[#474242]'>Link</p>
</div>

<div className='h-[220px] w-[160px] p-[16px] flex flex-col items-center justify-center mt-[-25px] shadow-md rounded-md'>
  <div className='h-[80px] w-[51px] flex justify-center items-center'>
  <PiDownloadSimpleBold className='h-full w-full text-[#2CB02C]'/>
  </div>
<h2 className='text-[#474747] font-extrabold'>Downloads</h2>
</div>

<div className='h-[220px] w-[160px] p-[16px] flex flex-col items-center justify-center mt-[-25px] shadow-md rounded-md'>
  <div className='h-[80px] w-[51px] flex justify-center items-center'>
  <MdNoteAlt className='h-full w-full text-[#2CB02C]'/>
  </div>
<h2 className='text-[#474747] font-extrabold'>Notice</h2>
</div>
</div>
    </div>
    
  )
}

export default Links
