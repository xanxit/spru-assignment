import React from "react";
import PageHeader from "../../components/PageHeader";

export default function About({ page_aboutUs }) {
  return (
    <div>
      <PageHeader {...page_aboutUs} />
      <div className="w-full pt-[50px]">
        <div className="max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto px-[15px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-[15px]">
              <img src={page_aboutUs.img} alt="" />
            </div>
            <div className="text-justify p-[15px] text-[16px] font-lato font-[400]">
              <p>
                SYFO division of SPRU PRODUCTS PRIVATE LIMITED aims to
                significantly impact the availability of hygiene and sanitation
                solutions for India. The company manufactures Home Care Products
                for consumers under the brand name of SYFO at a highly
                affordable price.
                <br />
                <br />
                SYFO Division currently boasts of world-class, state of the art
                technology; with the best manufacturing and finishing machines.
                Toilet market in India was only supplied with formulated toilet
                cleanse products in bottles.{" "}
                <span className="font-[700]">
                  SYFO Division make first time toilet cleaner in Sachet in
                  India.
                </span>
                <br />
                <br />
                The company is expanding the toilet cleaner market in India
                through product excellence and maintaining quality of the
                product in the hands of the consumer. We aspire to achieve our
                goal of consumer delight under the supervision of technical and
                management team highly experienced in production and finishing
                processes.
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 text-justify p-[15px] text-[16p] font-lato font-[400]">
              {(page_aboutUs.sections).map((section,index)=> {
                return <div className="" key={index}>
                  <h1 className="text-[24px] font-[600] leading-[24px] mb-[20px]">{section.heading}</h1>
                  <p className="mb-[35px] text-[16px] font-lato">{section.para}</p>
                </div> 
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
