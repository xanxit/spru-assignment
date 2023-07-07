import React from "react";
import WelcomeCard from "../components/WelcomeCard";

export default function Welcome(props) {
  return (
    <div
      className="w-full mx-auto md:flex md:justify-between pt-[70px] md:pt-[100px] xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] relative"
      id="container"
    >
      <div id="imgContainer" className="px-[15px] md:max-w-[42%]">
        <div className="text-center hidden md:block">
          <img
            src="https://www.spruproducts.in/images/pic11.jpg"
            alt=""
            className=" h-auto mx-auto"
          />
        </div>
      </div>
      <div className="md:max-w-[58%]">
        <div id="textContainer" className="px-[15px]">
          <h6 className="text-[24px] mb-[5px] leading-[28px] font-[400] ">
            Welcome to SPRU Products
          </h6>
          <p className="mb-[40px] font-lato font-[400] text-justify">
            Spru Products is one of the reliable Manufacturers, Exporters, and
            Suppliers of many items. We are an ISO 9001-2008 certified company.
            Our product range comprises of House Cleaning Chemicals, Autocare
            Products, and Laundry Products. We deliver good quality products at
            low cost. That is why our customers trust us and this helps us to
            create a long-term relationship with our customers. We use
            innovation and knowledge for creating ideas that can reduce the
            impact of our business operations on the environment. All our
            products are eco-friendly, biodegradable with extraordinary
            performance in action. These are manufactured using sophisticated
            machines, under the guidance of our qualified technician & team of
            experts.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {props.data.map((record, index) => {
            return <WelcomeCard key={index} {...record} />;
          })}
        </div>
      </div>
    </div>
  );
}
