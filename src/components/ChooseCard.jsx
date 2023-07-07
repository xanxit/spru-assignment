import React from "react";

export default function ChooseCard({ img, title }) {
  return (
    <div className="bg-white text-center rounded-[6px] px-[10px] py-[30px] hover:-translate-y-4  transition-all duration-300 relative drop-shadow-md group overflow-hidden cursor-pointer">
      <div>
        <div
          id="imgContainer"
          className="rounded-full overflow-hidden mb-[15px] relative z-40"
        >
          <img src={img} alt="" className="w-[60px] h-[60px] mx-auto" />
        </div>
        <div
          id="textContainer"
          className="relative  z-40"
        >
          <h4 className="uppercase font-[500] leading-[28px] text-[18px] text-[#212529] group-hover:text-white">
            {title}
          </h4>
        </div>
      </div>
      <div className="absolute left-0 bottom-[-100%] h-full w-full rounded-t-full bg-gradient-to-t from-primary to-backg group-hover:rounded-none group-hover:-translate-y-full transition-all duration-500 ease-out"></div>
    </div>
  );
}
