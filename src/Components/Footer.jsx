import React from 'react'
import { HiMapPin } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div className='h-[348px] w-full'>
      <div className='gap-y-3 bg-[#00A551] px-[18px] md:px-[50px] py-[24px] flex justify-between flex-wrap'>
        <div className='text-white mt-[16px]'>
          <h2 className='text-[20px] font-bold mb-[10px]'>Office Address</h2>
          <hr className="border-[#107916]"/>
          <ul className='gap-4 flex flex-col mt-[16px] text-[14px] font-semibold'>
            <li className='flex items-center gap-2'><HiMapPin className='text-xl'/>Birtamode 04, Jhapa</li>
            <li className='flex items-center gap-2'><FaPhone className='text-xl'/>023-535355</li>
            <li className='flex items-center gap-2'><HiOutlineMail className='text-xl'/>hamronepalcoop@gmail.com</li>
          </ul>
        </div>

        <div className='text-white mt-[16px] w-[232px]'>
          <h2 className='text-[20px] font-bold mb-[10px]'>Quick-Links</h2>
          <hr className="border-[#107916]"/>
          <ul className='gap-2 flex flex-col mt-[16px] text-[14px] font-semibold'>
            <li className='flex items-center gap-1'><MdKeyboardArrowRight className='text-2xl'/>
            Annual Calender</li>
            <li className='flex items-center gap-1'><MdKeyboardArrowRight className='text-2xl'/>Important Links</li>
            <li className='flex items-center gap-1'><MdKeyboardArrowRight className='text-2xl'/>Exchange Rates</li>
            <li className='flex items-center gap-1'><MdKeyboardArrowRight className='text-2xl'/>Date Converter</li>
            <li className='flex items-center gap-1'><MdKeyboardArrowRight className='text-2xl'/>EMI Calculator
            </li>
          </ul>
        </div>

        
        <div className='text-white mt-[16px] w-[232px]'>
          <h2 className='text-[20px] font-bold mb-[10px]'>Services</h2>
          <hr className="border-[#107916]"/>
          <ul className='gap-2 flex flex-col mt-[16px] text-[14px] font-semibold'>
            <li className='flex items-center gap-1'><MdKeyboardArrowRight className='text-2xl'/>
            Remittance</li>
            <li className='flex items-center gap-1'><MdKeyboardArrowRight className='text-2xl'/>Saving Schemes</li>
            <li className='flex items-center gap-1'><MdKeyboardArrowRight className='text-2xl'/>Loan Scheme</li>
            <li className='flex items-center gap-1'><MdKeyboardArrowRight className='text-2xl'/>Life Insurance</li>
          </ul>
        </div>
        
        <div className='text-white mt-[16px] w-[232px]'>
          <h2 className='text-[20px] font-bold mb-[10px]'>Newsletter</h2>
          <hr className="border-[#107916]"/>
          <ul className='gap-4 flex flex-col mt-[16px]'>
           <input type="text" className='h-[50px] px-5 text-[14px]' placeholder='Email Address'/>
           <button className='h-[50px] bg-[#CA5A0D] text-[16px]font-semibold'>Subscribe</button>

           <ul className='flex gap-2 text-white'>
          <li className='w-[25px] h-[25px] rounded-xl bg-[#2850B6] flex items-center justify-center'><FaFacebookF/></li>
          <li className='w-[25px] h-[25px] rounded-xl bg-[#2CC1E9] flex items-center justify-center'><FaTwitter /></li>
          <li className='w-[25px] h-[25px] rounded-xl bg-[#772A90] flex items-center justify-center'><FaInstagram /></li>
        </ul>
          </ul>

        </div>
       
      </div>


      <div className='h-[68px] flex flex-col justify-between items-center'>
        <div className='h-[5px] w-[60px] bg-[#A8D86A]'></div>
        <div className='h-[28px] text-[8px] md:text-[13px]'>
        @ 2024 | Hamro Nepal Saving and Credit Cooperative | Design Web Creation Nepal
        </div>
        <div className='h-[5px] w-[60px] bg-[#1A9859]'></div>
      </div>
    </div>
  )
}

export default Footer
