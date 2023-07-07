import React, { useState } from "react";

export default function StickyNav(props) {

  const [navActive, setNavActive] = useState(false);
  const handleNavClick = () => {
    console.log("clicked menu icon");
    setNavActive(!navActive);
  };

  return (
    <div className="bg-secondary sticky top-0 text-white z-40">
      <div className="xs:max-w-[540px] sm:max-w-[720px] lg:max-w-[1200px] md:max-w-[960px] mx-auto px-[15px] flex items-center justify-between relative ">
        <div
          className={`z-40 md:flex fixed md:relative top-0 md:left-0 -left-[280px] h-[100%]  md:w-full w-[280px] whitespace-nowrap  bg-white md:bg-transparent text-black md:text-inherit ${
            navActive ? " translate-x-[280px]" : ""
          } transition-all duration-300`}
          style={{ flexWrap: "wrap" }}
        >
          <div className="visible md:hidden p-[15px] w-[280px]">
            <div className="w-[180px] mx-auto">
              <img src={props.logo.logo} alt="" />
            </div>
          </div>

          <div className="font-[500] font-rubik text-[14px] md:text-[18px] m-[6px] px-[6px] py-[12px] cursor-pointer border-t-2 md:border-0 relative group">
            <div>HOME</div>
            <div className="invisible group-hover:visible absolute left-0 bottom-[-6px] md:bg-yellow-400 h-[3px] w-full"></div>
          </div>
          <div className="relative group">
            <div className="font-[500] font-rubik text-[14px] md:text-[18px] m-[6px] px-[6px] py-[12px] cursor-pointer border-t-2 md:border-0 relative group">
              <div>OUR COMPANY</div>
              <div className="invisible group-hover:visible absolute left-0 bottom-[-6px] md:bg-yellow-400 h-[3px] w-full"></div>
            </div>
            <ul className="absolute w-[220px] mt-[20px] py-[10px] bg-white text-[#333] invisible md:group-hover:visible group-hover:opacity-100 translate-y-0 group-hover:-translate-y-[19px] transition-all duration-300 border border-solid border-[#f4f4f4] shadow-md cursor-pointer">
              <li className="mx-[20px] my-[2px] text-[15px] font-[lato] font-[400]">
                About
              </li>
              <li className="mx-[20px] my-[2px] text-[15px] font-[lato] font-[400]">
                Vision & Mission
              </li>
              <li className="mx-[20px] my-[2px] text-[15px] font-[lato] font-[400]">
                Guiding Principles
              </li>
            </ul>
          </div>
          <div className="relative group">
          <div className="font-[500] font-rubik text-[14px] md:text-[18px] m-[6px] px-[6px] py-[12px] cursor-pointer border-t-2 md:border-0 relative group" ><div>
            PRODUCTS
          </div>
          <div className="invisible group-hover:visible absolute left-0 bottom-[-6px] md:bg-yellow-400 h-[3px] w-full"></div>
          </div>
            <div className="absolute w-[220px] mt-[20px] py-[10px] bg-white text-[#333] invisible md:group-hover:visible group-hover:opacity-100 translate-y-0 group-hover:-translate-y-[19px] transition-all duration-300 border border-solid border-[#f4f4f4] shadow-md">
              {props.data.map((record, index) => {
                return (
                  <div
                    key={index}
                    className="mx-[20px] my-[2px] text-[15px] font-[lato] font-[400] cursor-pointer"
                  >
                    {record}
                  </div>
                );
              })}
            </div>
          </div>
          {(props.navList).map((record, index) => {
            return (
              <div className="font-[500] font-rubik text-[14px] md:text-[18px] m-[6px] px-[6px] py-[12px] cursor-pointer border-t-2 md:border-0 relative group uppercase" key={index}><div>
            {record}
          </div>
          <div className="invisible group-hover:visible absolute left-0 bottom-[-6px] md:bg-yellow-400 h-[3px] w-full"></div>
          </div>
            );
          })}
        </div>
        <div className="visible md:hidden h-[56px] w-[160px] flex justify-center items-center">
          <img src={props.logo.logo} alt="" />
        </div>
        <div className="visible md:hidden relative z-40">
          <span onClick={handleNavClick}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" alt="" className="h-[25px] w-auto"/>
          </span>
        </div>
      </div>
      <div className={`absolute h-[100vh] w-[100vw] inset-0 bg-black/30 z-20 ${navActive? 'visible': 'hidden'}`}></div>
    </div>
  );
}
