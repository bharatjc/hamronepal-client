import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Links from '../Components/Links'
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom'

function ChairmanMsg() {
  return (
    <div>
     <Header />
     <div className="h-[200px] bg-[#289627] opacity-75 bg-cover md:px-[60px] px-[20px] flex flex-col justify-center items-center gap-3">
        <h1 className="text-[24px] md:text-[32px] font-bold text-[#FFFFFF] text-center">Message from the chairman</h1>
        <div className="flex items-center text-[14px] text-[#A4CE3A] font-bold gap-3">
          <h1 className="cursor-pointer">
            <Link to="/">Home</Link>
          </h1>
          <h1>
            <GoDotFill />
          </h1>
          <h1>Message from the chairman</h1>
        </div>
      </div>

      <div className="lg:px-[60px] px-[18px] pt-[48px] pb-5 flex md:flex-row flex-col">
<div className='md:w-[48%] w-full pl-0 md:pl-10 pr-0 md:pr-5'>
  <h1 className='text-[52px] text-[#00A450] leading-none font-bold mb-10'>Message from the 
  <span className='text-[30px] font-medium'> chairman</span></h1>
  <p className='font-semibold text-[#3A3434]'>First of all, I would like to express my heartiest thanks to all of our members, stakeholders and partners, which we able to get the achievement by our members services and institutional growth. We have been more committed than before to deliver effective professional services to our members. <br /><br />

From the beginning, our co-operative launched the programme as five years promotion stage (2069 BS-2074 BS) during those time, we have been promoting Hamro Nepal SACCOS as one of the best co-operative in Jhapa district and recognized in the co-operative movement of Nepal. As a financial co-operative, we have generated enough capital for the betterment and need fulfillment of our members. The next five years (2075 BS-2080 BS) is going to be as the developing stage of our co-operative. During this time, we are planning for the institutional development as economic, policy, good governance, skilled manpower and technological development. Members service is our only one motto therefore, we always be aware for the well being of our members from all of our service centers. <br /><br />

We are providing saving, loan, life insurance, remittance and social services to our members so that they can be supported for economic growth. Our planning is to be one of the best financial co-operative. To achieve our goal, we do apex organization and partners.

I admire responsibility assign to me and my team. I hope with the support of the government and network of co-operative movement, we can addresses challenges for the improvement of lives of each and every individual members involving in our co-operative society within this strategic period we can be one of the part of happy Nepali and prosperous Nepal through co-operation. I am sure we will achieve the goal of being one of the best financial co-operative society.</p>

<h1 className='my-4 py-[3px] text-[#00A450] text-[20px] font-bold border-b-[1px] border-b-amber-700'>Bhawani Prasad Dangal</h1>
<p className='text-[#00A450] text-[24px]'>Chairman</p>
</div>

<div className='w-full md:w-[45%] px-5'>
  <img src="../Chairman-Portrait.png" alt="" />
</div>
      </div>

     <Links />
     <Footer />
    </div>
  )
}

export default ChairmanMsg
