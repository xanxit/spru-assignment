import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[70vh] w-full bg-pageHeader bg-cover relative">
      <div className="absolute inset-0 w-full h-full bg-black opacity-80"></div>
      <div className="z-20 h-full flex justify-center items-center flex-col gap-3 xs:gap-6 relative">
        <div className="font-[800] text-[70px] xs:text-[150px] text-white xs:leading-[100px] leading-[70px]">
          404
        </div>
        <h1 className="text-[15px] xs:text-[30px] text-center text-white">
          That wasnt supposed to happen...
        </h1>
        <Link to={"/spru-assignment"}>
          <button className="bg-transparent border-4 border-white text-white rounded-xl px-4 py-2 transition-all duration-200 hover:bg-white hover:text-secondary font-[600]">
            Go back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
