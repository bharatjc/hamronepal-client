import React from "react";

function Assets() {
  return (
    <div className="px-[18px] md:px-[50px] pt-[60px] my-[20px] bg-cover flex flex-col md:flex-row justify-between text-[#474747]">
      <div className=" md:w-[40%] h-[460px] md:px-[15px]">
        <img src="../Asset-1@3x.png" alt="" className="h-full w-full"/>
      </div>

      <div className="w-full md:w-[55%] px-[15px]">
         <h2 className="text-[24px] md:text-[35px] font-semibold">Manage your <span className="font-bold text-[#008C44]">Digital Payments </span>
         Anytime, Anywhere.</h2>
         <p className="text-[18px] md:text-[24px] my-[8px]">Download our <span className="text-[#008C44]">Mobile Banking</span> app!</p>

         <div className="w-[180px] h-[56px] mt-10 md:my-5">
          <img src="../Asset-2@3x.png" alt="" />
         </div>
      
         <p className="h-[43px] text-[18px] my-6">Quick, Secure, and Convenient: Your all-in-one mobile banking app for seamless financial control.</p>

         <div className=" my-10 flex flex-col lg:flex-row gap-5">
           <div className="h-[100px] w-[100px] bg-cover pt-10 md:pt-0">
           <img src="../App-link-QR.png" alt="" /> 
           </div>

           <div className="flex flex-col gap-1 md:py-0">
            <p className="text-[18px] pt-10 md:pt-0">Click to download our mobile app</p>
            <div className="flex gap-4">
              <div className="h-[45px] w-[150px]">
                <img src="../Asset-4@3x.png" alt="" />
              </div>
              <div className="h-[45px] w-[150px]">
                <img src="../Asset-5@3x.png" alt="" />
              </div>

            </div>
            <div className="flex gap-2">
              <p>Internet Banking Login</p>
              <div className="h-[32px] w-[90px]">
                <img src="../Asset-3@3x.png" alt="" />
              </div>
            </div>
           </div>

         </div>

      </div>
    </div>
  );
}

export default Assets;
