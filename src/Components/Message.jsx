import React from 'react'

function Message() {
  return (
    <div class="bg-[url('../msg-background.jpg')] px-[18px] md:px-[50px] py-[50px] my-[20px] flex gap-x-4 flex-col md:flex-row justify-around items-center">
     <div className='md:w-[350px] bg-[#008C44] rounded-lg px-[22px] py-[60px] text-white flex flex-col items-center'>
    <h1 className='text-[26px] mb-[10px] font-bold'>Message from the chairman</h1>
    <p className='text-[17px]'>First of all, I would like to express my heartiest thanks to all of our members, stakeholders and partners, which we able to get the achievement by our members services and institutional growth. We have been more committed than before to deliver effective professional… <span className='italic text-[#C6621E]'>Read More</span></p>
    <div className='flex mt-8 gap-4'>
      <div className='h-[70px] w-[70px] rounded-full bg-white bg-cover overflow-hidden'>
        <img src="../Chairman-Photo.png" alt="" className='h-full w-full'/>
      </div>
      <div>
      <h1>Bhawani Prasad Dangal</h1>
      <p>Chairman</p>
      </div>
    </div>
     </div>

     <div className='py-[10px] md:w-[720px] shadow-md px-4 rounded-md'>
      <h1 className='text-[40px] text-[#474747] font-bold my-5'>Welcome to Hamronepal Coop</h1>
      <p className='text-[18px] text-gray-600'>Hamro Nepal Savings and Credit Cooperative  Ltd. Birtamod Municipality Ward No. 4  established under Jhapa Cooperative Act 2048 and Cooperative Rules 2049 on 14th Shrawan 2069 duly registered by Division Cooperative Office Bhadrapur Jhapa with the Registration No.  3/1/7 (652) 069/070. The three pillars of economic development adopted by the country are government, private  and cooperatives. In an environment where the cooperative sector is being accepted as the backbone of economic development by the state,  we are using the opportunities provided by it to reduce the economic deprivation in the society by making members of different castes, regions, classes to made them self-employed & self reliant. This organization has been established with the main slogan of "Our Nepal, Our Cooperative, Our Future" with the objective of helping to become self-reliant and for the greater good of its members.</p>

      <button className='bg-[#C6621E] text-white my-4 w-[165px] h-[48px] italic rounded-3xl'>Read More</button>
     </div>
    </div>
  )
}

export default Message
