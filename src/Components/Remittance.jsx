import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Remittance() {
  return (
    <div className="px-[18px] md:px-[50px] pt-[10px] pb-[10px] mt-[30px] mb-[10px]">
    <div className='flex gap-5 items-center'>
    <h1 className='text-[#008C44] italic'>Remittance</h1>
    <p className='h-[0.5px] w-20 bg-[#008C44]'></p>
    </div>
    
    <h1 className='my-0 md:my-5 md:text-[35px] text-[#008C44]'><span className='text-[#474747] font-bold'>Remittance</span> Services</h1>

    <Carousel showArrows={false}
       showStatus={false}
       swipeable={true}
       showThumbs={false}>
                <div className='flex justify-between mb-14'>
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

  </div>
  )
}

export default Remittance
