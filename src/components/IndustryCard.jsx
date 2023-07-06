import React from "react";

export default function IndustryCard({ img, title }) {
  return (
    <div className="relative group overflow-hidden ">
      <img src={img} alt="" className="group-hover:scale-125 transition-all duration-200 ease-linear" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/[.95] via-blue-500/[.95] to-teal-400/[.95] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear">
      <span className="text-white absolute bottom-0 left-0 font-[700] leading-[18px] text-[18px] p-[20px]">{title}</span>
      </div>
      
    </div>
  );
}
