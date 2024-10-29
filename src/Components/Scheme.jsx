import React from 'react'
import { FaPiggyBank } from "react-icons/fa";
import { FaCommentsDollar } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";

function Scheme() {
  return (
    <div class="bg-[url('../scheme-bg.jpg')] px-[18px] md:px-[50px] py-[50px] my-[20px] bg-cover">
      <div className='flex gap-5 items-center'>
      <h1 className='text-[#008C44] italic'>Schemes</h1>
      <p className='h-[0.5px] w-20 bg-[#008C44]'></p>
      </div>
      
      <h1 className='mb-5 text-[35px] text-[#008C44]'><span className='text-[#474747] font-bold'>Our</span> Schemes</h1>

      <div className='flex flex-col md:flex-row justify-between items-center my-5 gap-y-2 gap-2'>

      <div className='h-[288px] w-full md:w-[255px] bg-white rounded-xl shadow-lg flex flex-col justify-center items-center gap-5'>
        <div className='h-[90px] w-[90px] rounded-full bg-[#9B4479] flex justify-center items-center'><FaPiggyBank className='text-5xl text-white'/></div>
        <h1 className='text-[#6F6F6F] text-[20px] font-semibold'>Saving Schemes</h1>
        <button className='italic h-[48px] w-[150px] border-[#9B4479] border-2 rounded-full text-[#6F6F6F]'>Read More</button>
      </div>

      <div className='h-[288px] w-full md:w-[255px] bg-white rounded-xl shadow-lg flex flex-col justify-center items-center gap-5'>
        <div className='h-[90px] w-[90px] rounded-full bg-[#9B4479] flex justify-center items-center'><FaCommentsDollar className='text-5xl text-white'/></div>
        <h1 className='text-[#6F6F6F] text-[20px] font-semibold'>Loan Scheme</h1>
        <button className='italic h-[48px] w-[150px] border-[#9B4479] border-2 rounded-full text-[#6F6F6F]'>Read More</button>
      </div>
      <div className='h-[288px] w-full md:w-[255px] bg-white rounded-xl shadow-lg flex flex-col justify-center items-center gap-5'>
        <div className='h-[90px] w-[90px] rounded-full bg-[#9B4479] flex justify-center items-center'><BsBank2 className='text-5xl text-white'/></div>
        <h1 className='text-[#6F6F6F] text-[20px] font-semibold'>Remittance
        </h1>
        <button className='italic h-[48px] w-[150px] border-[#9B4479] border-2 rounded-full text-[#6F6F6F]'>Read More</button>
      </div>
      <div className='h-[288px] w-full md:w-[255px] bg-white rounded-xl shadow-lg flex flex-col justify-center items-center gap-5'>
        <div className='h-[90px] w-[90px] rounded-full bg-[#9B4479] flex justify-center items-center'><FaHandHoldingHeart className='text-5xl text-white'/></div>
        <h1 className='text-[#6F6F6F] text-[20px] font-semibold'>Life Insurance
        </h1>
        <button className='italic h-[48px] w-[150px] border-[#9B4479] border-2 rounded-full text-[#6F6F6F]'>Read More</button>
      </div>

      </div>

    </div>
  )
}

export default Scheme
