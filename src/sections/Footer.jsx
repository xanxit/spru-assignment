import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer({ dataObject }) {
  return (
    <>
      <div className="w-full bg-emerald-900">
        <div className="pt-[30px] sm:pt-[50px] pb-[20px]">
          <div className="flex flex-wrap xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto">
            <div className="mb-[25px] font-lato font-[400] text-[15px] leading-[24px] px-[15px] xs:max-w-[50%] lg:max-w-[41.66%]">
              <div className="max-w-[220px] my-[15px]">
                <img src={dataObject.info.logo} alt="" />
              </div>
              <p className="text-emerald-200 text-justify ">
                {dataObject.info.about}
              </p>
            </div>
            <div className=" px-[15px] xs:max-w-[50%] lg:max-w-[25.01%] grow">
              <h1 className="text-emerald-50 font-[700] leading-[22px] text-[18px] font-sans">
                QUICK LINKS
              </h1>
              <div className="mt-[15px] mb-[30px] w-[50px] h-[4px] bg-backg" />
              <div>
                <ul className="text-emerald-200 font-[400] leading-[22px] text-[15px] font-lato mb-[25px] sm:mb-[40px] cursor-pointer">
                  {dataObject.links.map((record, index) => {
                    return (
                      <Link to={"/" + record.link} key={index}>
                        <li className="">{record.text}</li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className=" px-[15px] xs:max-w-[50%] lg:max-w-[33.33%]">
              <h1 className="text-emerald-50 font-[700] leading-[22px] text-[18px] font-sans">
                GET IN TOUCH
              </h1>
              <div className="mt-[15px] mb-[30px] w-[50px] h-[4px] bg-backg" />
              <div className="text-emerald-200 mt-[5px] leading-[22px]">
                <div className="pl-[40px] mb-[20px] font-lato">
                  <h1 className="font-[600] text-[15px]">ADDRESS</h1>
                  <p className="font-[400] text-[15px]">
                    {dataObject.info.address}
                  </p>
                </div>
                <div className="pl-[40px] mb-[20px] font-lato">
                  <h1 className="font-[600] text-[15px]">MOBILE</h1>
                  <p className="font-[400] text-[15px]">
                    {dataObject.info.phone} (24/7 Support Line)
                  </p>
                </div>
                <div className="pl-[40px] mb-[20px] font-lato">
                  <h1 className="font-[600] text-[15px]">EMAIL</h1>
                  <p className="font-[400] text-[15px]">
                    {dataObject.info.email}
                  </p>
                </div>
                <div className="pl-[40px] mb-[20px] flex gap-6">
                  <a href={dataObject.socials.facebook}>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-[30px] h-auto"
                    />
                  </a>
                  <a href={dataObject.socials.linkedin}>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="w-[30px] h-auto"
                    />
                  </a>
                  <a href={dataObject.socials.twitter1}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="w-[30px] h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-secondary text-emerald-200 border-white/[0.2] border-t-[1px]">
        <div className="flex flex-col sm:flex-row flex-wrap xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto text-[14px] py-[25px] font-lato font-[400]">
          <div className="px-[15px] py-[5px] sm:py-[0px] text-left sm:max-w-[33.3%] grow">
            © Copyright 2020 SPRU Products
          </div>
          <div className="px-[15px] py-[5px] sm:py-[0px] text-center sm:max-w-[33.3%] grow cursor-pointer">
            Design by AKSHAT
          </div>
          <ul className="flex px-[15px] py-[5px] sm:py-[0px] justify-end sm:max-w-[33.3%] grow text-[15px] font-lato leading-6">
            <li className="pl-[15px]">About</li>
            <li className="pl-[15px]">Help Desk</li>
            <li className="pl-[15px]">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
}
