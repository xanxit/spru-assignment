import React from "react";

export default function Footer(props) {
  return (
    <>
      <div className="w-full bg-[#072d5a]">
        <div className="pt-[30px] sm:pt-[50px] pb-[20px]">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 px-[15px] xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto">
            <div className="mb-[25px] font-lato font-[400] text-[15px] leading-[24px] px-[15px] lg:max-w-[41%]">
              <div className="max-w-[220px] my-[15px]">
                <img src={props.data.info.logo} alt="" />
              </div>
              <p className="text-[#8fb5e3] text-justify ">{props.data.info.about}</p>
            </div>
            <div className=" px-[15px]">
              <h1 className="text-[#cdffff] font-[700] leading-[22px] text-[18px] font-sans">QUICK LINKS</h1>
              <div className="mt-[15px] mb-[30px] w-[50px] h-[3px] bg-[#3c5eab]" />
              <div>
                <ul className="text-white font-[400] leading-[22px] text-[15px] font-lato mb-[25px]">
                  {props.data.links.map((record, index) => {
                    return (
                      <li key={index} className="">
                        {record}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className=" px-[15px]">
            <h1 className="text-[#cdffff] font-[700] leading-[22px] text-[18px] font-sans">GET IN TOUCH</h1>
              <div className="mt-[15px] mb-[30px] w-[50px] h-[3px] bg-[#3c5eab]" />
              <div className="text-[#8fb5e3] mt-[5px] leading-[22px]">
                <div className="pl-[40px] mb-[20px] font-lato">
                  <h1 className="font-[600] text-[15px]">ADDRESS</h1>
                  <p className="font-[400] text-[15px]">{props.data.info.address}</p>
                </div>
                <div className="pl-[40px] mb-[20px] font-lato">
                  <h1 className="font-[600] text-[15px]">MOBILE</h1>
                  <p className="font-[400] text-[15px]">{props.data.info.phone} (24/7 Support Line)</p>
                </div>
                <div className="pl-[40px] mb-[20px] font-lato">
                  <h1 className="font-[600] text-[15px]">EMAIL</h1>
                  <p className="font-[400] text-[15px]">{props.data.info.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row bg-[#062448] text-[#8fb5e3]">
        <div>© Copyright 2020 SPRU Products</div>
        <div>Design by AKSHAT</div>
        <ul className="flex">
          <li>About</li>
          <li>Help Desk</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </>
  );
}
