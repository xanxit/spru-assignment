import React from "react";
import PageHeader from "../../components/PageHeader";

export default function Vision({ page_vision }) {
  return (
    <div>
      <PageHeader {...page_vision} />
      <div className="w-full pt-[50px]">
        <div className="max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto px-[15px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-[15px]">
              <img src={page_vision.img} alt="" />
            </div>
            <div className="p-[15px] text-[16px]">
              {page_vision.sections.map((section, index) => {
                return (
                  <div className="" key={index}>
                    <h1 className="text-[24px] font-[700] leading-[24px] mb-[20px]">
                      {section.heading}
                    </h1>
                    <p className="mb-[35px] text-[16px] font-lato">{section.para}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
