import React from "react";

export default function TestCard({ img, name, message, job }) {
  return (
    <div className="shrink-0 w-[47%] md:w-[31%] bg-white rounded-md relative overflow-hidden snap-start">
      <div className="flex flex-col justify-between h-full p-[15px] cursor-pointer">
        <div>
          <div className="h-[100px] w-[100px] rounded-full shadow-lg flex items-center justify-center bg-white mx-auto">
            <img
              src={img}
              alt=""
              className="h-[90px] w-[90px] rounded-full mx-auto"
            />
          </div>
          <p className="p-[15px] text-[16px]">{message}</p>
        </div>
        <div>
          <h1 className="p-[5px] text-[18px] font-[500]">{name}</h1>
          <p className="font-lato italic text-[16px]">Proprietor</p>
          <p className="font-lato italic break-words text-[16px]">{job}</p>
        </div>
      </div>
      <div className="absolute h-[10px] w-full bottom-0 bg-secondary"></div>
    </div>
  );
}
