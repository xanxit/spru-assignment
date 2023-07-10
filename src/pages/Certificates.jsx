import React from "react";
import PageHeader from "../components/PageHeader";
import PdfView from "../components/PdfView";

export default function Certificates({ title, pdfContent, links }) {
  return (
    <div>
      <PageHeader title={title} />
      <div className="w-full py-[70px]">
        <div className="max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto px-[15px]">
          <div>
            <div className="flex flex-row gap-[30px] mb-[50px]">
              <PdfView {...pdfContent} className="w-[25%]" />
            </div>
          </div>
          <div className="">
            <span className="leading-[22px] font-[600] text-[20px] pb-1 border-b-2 border-black">GET YOUR BROCHURES</span>
            <div className="mt-4">
                {links.map((link,index)=>{
                    return <div key={index} className="p-2 md:p-4 border-2 border-blue-700 rounded-xl mt-4 relative overflow-hidden">
                        <a className="text-blue-700 font-sans font-[700] text-[10px] md:text-[18px]" href={link.link} target="_blank">{link.file}</a>
                        <a href={link.link} target="_blank">
                        <div className="absolute bg-blue-600 h-full p-4 top-0 right-0 object-cover flex justify-center items-center">
                            <h1 className="text-white">view</h1>
                        </div>
                        </a>
                    </div>
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
