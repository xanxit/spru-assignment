import React from "react";

export default function StickyNav(props) {
  const navList = [
    "catalogue",
    "certificates",
    "career",
    "distributor",
    "gallery",
    "contact us",
  ];
  return (
    <div className="bg-[#072d5a] sticky top-0 text-white z-50">
      <div className="lg:max-w-[1200px] md:max-w-[960px] mx-auto px-[15px]">
        <div className="flex whitespace-nowrap"  style={{ flexWrap: 'wrap' }}>
          <div className="font-[500] font-rubik text-[18px] m-[6px] px-[6px] py-[12px] cursor-pointer hover:border-b-[3px] hover:border-yellow-500" >HOME</div>
          <div className="relative group">
                <div className=" font-[500] font-rubik text-[18px] m-[6px] px-[6px] py-[12px] cursor-pointer       group">OUR COMPANY</div>
                <ul className="absolute w-[220px] mt-[20px] py-[10px] bg-white text-[#333] invisible group-hover:visible group-hover:opacity-100 translate-y-0 group-hover:-translate-y-[19px] transition-all duration-300 border border-solid border-[#f4f4f4] shadow-md">
                <li className="mx-[20px] my-[2px] text-[15px] font-[lato] font-[400]">About</li>
                <li className="mx-[20px] my-[2px] text-[15px] font-[lato] font-[400]">Vision & Mission</li>
                <li className="mx-[20px] my-[2px] text-[15px] font-[lato] font-[400]">Guiding Principles</li>
            </ul>
          </div>
          <div className="relative group">
                <div className=" font-[500] font-rubik text-[18px] m-[6px] px-[6px] py-[12px] cursor-pointer       group">PRODUCTS</div>
                <div className="absolute w-[220px] mt-[20px] py-[10px] bg-white text-[#333] invisible group-hover:visible group-hover:opacity-100 translate-y-0 group-hover:-translate-y-[19px] transition-all duration-300 border border-solid border-[#f4f4f4] shadow-md">
                {props.data.map((record, index) => {
                    return (
                    <div key={index} className="mx-[20px] my-[2px] text-[15px] font-[lato] font-[400]">
                        {record}
                    </div>
                    );
                })}
            </div>
          </div>
          {navList.map((record, index) => {
            return (
              <div className="uppercase font-[500] font-rubik text-[18px] m-[6px] px-[6px] py-[12px] cursor-pointer" key={index}>
                {record}
              </div>
            );
          })}
        </div>
       
      </div>
    </div>
  );
}
