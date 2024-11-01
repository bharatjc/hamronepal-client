import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Links from '../Components/Links'
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div>
     <Header />
     <div className="h-[200px] bg-[#289627] opacity-75 bg-cover md:px-[60px] px-[20px] flex flex-col justify-center items-center gap-3">
        <h1 className="text-[24px] md:text-[32px] font-bold text-[#FFFFFF] text-center">Welcome to Hamronepal Coop</h1>
        <div className="flex items-center text-[14px] text-[#A4CE3A] font-bold gap-3">
          <h1 className="cursor-pointer">
            <Link to="/">Home</Link>
          </h1>
          <h1>
            <GoDotFill />
          </h1>
          <h1>Welcome to Hamronepal Coop</h1>
        </div>
      </div>

<div className="md:px-[60px] px-[18px] py-[48px]">
Hamro Nepal Savings and Credit Cooperative  Ltd. Birtamod Municipality Ward No. 4  established under Jhapa Cooperative Act 2048 and Cooperative Rules 2049 on 14th Shrawan 2069 duly registered by Division Cooperative Office Bhadrapur Jhapa with the Registration No.  3/1/7 (652) 069/070. The three pillars of economic development adopted by the country are government, private  and cooperatives. In an environment where the cooperative sector is being accepted as the backbone of economic development by the state,  we are using the opportunities provided by it to reduce the economic deprivation in the society by making members of different castes, regions, classes to made them self-employed & self reliant. This organization has been established with the main slogan of “Our Nepal, Our Cooperative, Our Future” with the objective of helping to become self-reliant and for the greater good of its members.
</div>
     <Links />
     <Footer />
    </div>
  )
}

export default Welcome
