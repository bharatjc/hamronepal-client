import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const [menu, setMenu] = useState(false)
  return (
    <>
    <div className='h-[105px] w-full gap-y-2 flex flex-col md:grid md:grid-cols-4 px-[15px]'>
      
   <div className='px-[15px] flex justify-center'><img className='w-[265px] h-[52px] mt-[15px]' src="../logo-1.png" alt="" /></div>

   <div className='hidden px-[15px] md:flex justify-end'><img src="../logo-slogan.png" alt="" className='my-[15px] mr-[30px] ml-[20px] w-[107px] h-[70px]'/></div>

   <div className='col-span-2 flex items-end px-[15px]'>
    <ul className='flex justify-end w-full text-[13px] gap-4 text-gray-600'>
      <li className='flex items-center gap-2'>
      <CiMail className='text-green-500 text-[18px]'/>
      <Link to="/faq">
      FAQ's
      </Link>
      </li>
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

    <div className='bg-[#008C44] h-[54px] px-[15px] mt-3 sticky top-0 z-10 flex justify-between items-center'>
      <div className='md:hidden'>
      <TiThMenu className='flex text-white text-2xl relative' onClick={()=>{
        setMenu(!menu)}}/>

{menu && (
            <ul className='absolute top-10 left-0 bg-[#008C44] p-5 font-bold flex flex-col text-white gap-4'>
              <li><Link to="/">HOME</Link></li><hr />
              <li><div className='flex items-center' onClick={()=>handleClick(1)
             }>
          ABOUT US
          <IoMdArrowDropdown className='text-lg'/>
            </div>
            {activeIndex === 1 && (
          <ul className="text-[#FFF5E1] flex flex-col p-2 bg-[#05974C] gap-4">
            <li>ABOUT US</li>
            <li>MESSAGE FROM THE CHAIRMAN</li>
            <li>BOARD OF DIRECTORS</li>
            <li>ACCOUNT SUPERVISION COMMITTEE</li>
            <li>OTHER COMMITTEE</li>
            <li>HEAD OFFICE MANAGEMENT TEAM</li>
            <li>SEVICE CENTER HEADS</li>
          </ul>
        )}
            </li><hr />

              <li><div className='flex items-center' onClick={()=>handleClick(2)
             }>
        SERVICES
          <IoMdArrowDropdown className='text-lg'/>
            </div>
            {activeIndex === 2 && (
          <ul className="text-[#FFF5E1] flex flex-col p-2 bg-[#05974C] gap-4">
            <li>SAVING SCHEMES</li>
            <li>LOAN SCHEME</li>
            <li>REMITTANCE</li>
            <li>LIFE INSURANCE</li>
          </ul>
        )}
            </li><hr />

              <li><div className='flex items-center' onClick={()=>handleClick(3)
             }>
        NEWS & ACTIVITIES
          <IoMdArrowDropdown className='text-lg'/>
            </div>
            {activeIndex === 3 && (
          <ul className="text-[#FFF5E1] flex flex-col p-2 bg-[#05974C] gap-4">
            <li>NEWS & ACTIVITIES</li>
            <li>UPCOMING EVENTS</li>
          </ul>
        )}
            </li><hr />

              <li> <div className='flex items-center' onClick={()=>handleClick(4)
             }>
        PUBLICATION
          <IoMdArrowDropdown className='text-lg'/>
            </div>
            {activeIndex === 4 && (
          <ul className="text-[#FFF5E1] flex flex-col p-2 bg-[#05974C] gap-4">
            <li>REPORTS</li>
            <li>HNC QUARTERLY BULLETIN</li>
          </ul>
        )}
            </li><hr />

              <li>BRANCHES</li><hr />
              <li>GALLERY</li><hr />
              <li>CAREER</li><hr />
              <li>CSR</li><hr />
              <li>Contact US</li>
            </ul>
          )}
        
      </div>
    
      <ul className='hidden md:flex justify-between px-[20px] items-center h-full w-[95%] text-[12px] lg:text-[15px] font-semibold text-white'>
        <li className='cursor-pointer'><Link to="/">HOME</Link></li>
        <li className='cursor-pointer relative group'>
          <div className='flex items-center'>
          ABOUT US
          <IoMdArrowDropdown className='text-lg'/>
            </div>
        <ul className='group-hover:flex flex-col absolute hidden bg-[#008C44] p-7 gap-6 w-[440%]'>
            <li>ABOUT US</li>
            <li>MESSAGE FROM THE CHAIRMAN</li>
            <li>BOARD OF DIRECTORS</li>
            <li>ACCOUNT SUPERVISION COMMITTEE</li>
            <li>OTHER COMMITTEE</li>
            <li>HEAD OFFICE MANAGEMENT TEAM</li>
            <li>SEVICE CENTER HEADS</li>
          </ul>
        </li>
        <li className='cursor-pointer relative group'>
        <div className='flex items-center'>
        SERVICES
          <IoMdArrowDropdown className='text-lg'/>
            </div>
        <ul className='group-hover:flex flex-col absolute hidden bg-[#008C44] p-7 gap-6 w-[360%]'>
            <li>SAVING SCHEMES</li>
            <li>LOAN SCHEME</li>
            <li>REMITTANCE</li>
            <li>LIFE INSURANCE</li>
          </ul>
        </li>
        <li className='cursor-pointer relative group'>
        <div className='flex items-center'>
        NEWS & ACTIVITIES
          <IoMdArrowDropdown className='text-lg'/>
            </div>
        <ul className='group-hover:flex flex-col absolute hidden bg-[#008C44] p-7 gap-6 w-[200%]'>
            <li>NEWS & ACTIVITIES</li>
            <li>UPCOMING EVENTS</li>
          </ul>
        </li>
        <li className='cursor-pointer relative group'>
        <div className='flex items-center'>
        PUBLICATION
          <IoMdArrowDropdown className='text-lg'/>
            </div>
        <ul className='group-hover:flex flex-col absolute hidden bg-[#008C44] p-7 gap-6 w-[280%]'>
            <li>REPORTS</li>
            <li>HNC QUARTERLY BULLETIN</li>
          </ul>
        </li>
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
