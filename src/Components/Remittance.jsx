import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaCalculator } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { MdNoteAlt } from "react-icons/md";

function Remittance() {
  return (
    <div className="px-[18px] md:px-[50px] pt-[10px] pb-[40px] my-[20px]">
    <div className='flex gap-5 items-center'>
    <h1 className='text-[#008C44] italic'>Remittance</h1>
    <p className='h-[0.5px] w-20 bg-[#008C44]'></p>
    </div>
    
    <h1 className='my-0 md:my-5 md:text-[35px] text-[#008C44]'><span className='text-[#474747] font-bold'>Remittance</span> Services</h1>

    <Carousel showArrows={false}
       showStatus={false}
       swipeable={true}
       showThumbs={false}>
                <div className='flex justify-between mb-20'>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/featured.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/nepal-remit.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/New-Project-2.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/New-Project-4.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/New-Project-5.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/New-Project-6.png" alt="" />
                    </div>
                </div>

                <div className='flex justify-between mb-20'>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/New-Project-7.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/New-Project-8.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/New-Project-9.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/featured.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/nepal-remit.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center h-[77px] w-[155px] bg-cover'>
                      <img src="../payment/New-Project-2.png" alt=""/>
                    </div>
                </div>
            </Carousel>

<div className='flex flex-wrap justify-center items-center mt-2 md:mt-20 gap-x-10'>
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

export default Remittance
