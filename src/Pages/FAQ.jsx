import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Links from "../Components/Links";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

function FAQ() {

  const [answer, setAnswer] = useState(null);
  const handleClick = (index) => {
    setAnswer(answer === index ? null : index);
  };

  return (
    <div>
      <Header />
      <div className="h-[200px] bg-[#289627] opacity-75 bg-cover px-[60px] flex flex-col justify-center items-center gap-3">
        <h1 className="text-[32px] font-bold text-[#FFFFFF]">FAQ's</h1>
        <div className="flex items-center text-[14px] text-[#A4CE3A] font-bold gap-3">
          <h1 className="cursor-pointer">
            <Link to="/">Home</Link>
          </h1>
          <h1>
            <GoDotFill />
          </h1>
          <h1>FAQ</h1>
        </div>
      </div>

      <div className="md:px-[60px] px-[18px]">
        <div className="md:mx-[10vw] bg-[#F7F7F7] rounded-md my-10 py-10">
          <div className="border-b-[2px] px-10 py-5 flex flex-col gap-y-4">
            <h1 className="cursor-pointer text-[#007BFF]" onClick={()=>handleClick(1)
             }>
              What documents are required to become the memeber of the
              orgaization?
            </h1>
            {
answer === 1 && (
<p className="bg-[#FFFFFF] px-2">
              Person with Nepali Citizenship In the case of children, birth
              registration must be done at the local level Filled the prescribed
              application form Residing and doing business within the work area
              of the organization.
            </p>
)
            }
            
          </div>

          <div className="border-b-[2px] px-10 py-5 flex flex-col gap-y-4">
            <h1 className="cursor-pointer text-[#007BFF]" onClick={()=>handleClick(2)
             }>How much does it cost to become a share member?</h1>
         {
          answer === 2 &&  <p className="bg-[#FFFFFF] px-2">
          10 lots share of Rs. 1000 and the entrance fee is 100. Child
          members do not have to buy shares. There is no entrance fee for
          senior citizens and single women.
        </p>
         }   
          </div>

          <div className="border-b-[2px] px-10 py-5 flex flex-col gap-y-4">
            <h1 className="cursor-pointer text-[#007BFF]" onClick={()=>handleClick(3)
             }>What are the areas of the work of the organization?</h1>
  {
    answer === 3 && <p className="bg-[#FFFFFF] px-2">
    Click this link:
   <span> http://webpromotionnepal.com/
    hamronepal/
    branch-network/</span>
  </p>
  }          
          </div>

          <div className="border-b-[2px] px-10 py-5 flex flex-col gap-y-4">
            <h1 className="cursor-pointer text-[#007BFF]" onClick={()=>handleClick(4)
             }>
              What are the service centers of the organization and contact no?
            </h1>
  {
    answer === 4 &&  <p className="bg-[#FFFFFF] px-2">
    Click the link : 
    <span> http://webpromotionnepal.com/
    hamronepal/branch-network/</span>
  </p>
  }         
          </div>

          <div className="border-b-[2px] px-10 py-5 flex flex-col gap-y-4">
            <h1 className="cursor-pointer text-[#007BFF]" onClick={()=>handleClick(5)
             }>Where is the head office of the organization?</h1>
   {
    answer === 5 && <p className="bg-[#FFFFFF] px-2">
    Click the link :
    <span> http://webpromotionnepal.com/
      hamronepal/contact-us/</span>
  </p>
   }         
          </div>

          <div className="border-b-[2px] px-10 py-5 flex flex-col gap-y-4">
            <h1 className="cursor-pointer text-[#007BFF]" onClick={()=>handleClick(6)
             }>When was the organization established?</h1>
   {
    answer === 6 && <p className="bg-[#FFFFFF] px-2">Shravan 14, 2069</p>
   }         
          </div>

          <div className="border-b-[2px] px-10 py-5 flex flex-col gap-y-4">
            <h1 className="cursor-pointer text-[#007BFF]" onClick={()=>handleClick(7)
             }>Who was the board of directors of the organization?</h1>
        {
          answer === 7 &&  <p className="bg-[#FFFFFF] px-2">
          Click the link :
          <span> http://webpromotionnepal.com/
            hamronepal/team-type/board-of-directors/</span>
        </p>
        }   
          </div>

          <div className="border-b-[2px] px-10 py-5 flex flex-col gap-y-4">
            <h1 className="cursor-pointer text-[#007BFF]" onClick={()=>handleClick(8)
             }>What documents are required to get a loan?</h1>
     {
      answer === 8 && <p className="bg-[#FFFFFF] px-2">
      You can get information by contacting the service center where you
      have become a member.
    </p>
     }       
          </div>

          <div className="px-10 py-5 flex flex-col gap-y-4">
            <h1 className="cursor-pointer text-[#007BFF]" onClick={()=>handleClick(9)
             }>What is the latest financial condition of the organization?</h1>
       {
        answer === 9 && <p className="bg-[#FFFFFF] w-full">
        Click the link below:
        <span> http://webpromotionnepal.com/
          hamronepal/about-us/</span>
      </p>
       }     
          </div>
        </div>
      </div>

      <Links />
      <Footer />
    </div>
  );
}

export default FAQ;
