import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Form(props) {
  return (
    <div className="w-full py-[70px]">
      <div className="max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto px-[15px]">
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="w-full md:w-[66%] p-[30px] bg-slate-200">
            <h1 className="text-[24px] font-[800] mb-[25px]">{props.title}</h1>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col md:flex-row gap-[30px]">
                <input
                  type="text"
                  className="p-3 border-2 border-slate-300 w-full"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="p-3 border-2 border-slate-300 w-full"
                  placeholder="Your Email ID"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-[30px]">
                <input
                  type="text"
                  className="p-3 border-2 border-slate-300 w-full"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  className="p-3 border-2 border-slate-300 w-full"
                  placeholder="Subject"
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                className="p-3 border-2 border-slate-300"
                placeholder="Your Message ..."
              />
              <button className="row-span-1 col-span-1 md:col-span-2 bg-primary h-full text-white p-3">
                Submit
              </button>
            </div>
          </div>
          <div className="w-full md:w-[33%] p-[30px] border-2 border-slate-200">
            {props.listings !== undefined ? (
              <div>
                <h1 className="text-[24px] font-[800] mb-[10px]">
                  Current Requirements
                </h1>
                {props.listings.map((listing, index) => {
                  return (
                    <p key={index} className="px-[20px] py-[10px]">
                      {listing}
                    </p>
                  );
                })}
              </div>
            ) : (
              <div className="flex-col flex justify-between h-full w-full">
                <div>
                  <h1 className="text-[24px] font-[800] mb-[10px]">
                    Quick Contact
                  </h1>
                  <p className="mb-[30px]">
                    If you have any questions simply use the following contact
                    details.
                  </p>
                  <div className=" mt-[5px] leading-[22px]">
                    <div className="mb-[20px] font-lato">
                      <h1 className="font-[600] text-[15px] mb-[8px]">
                        ADDRESS
                      </h1>
                      <div className="flex flex-row items-center justify-start">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="w-[22px] p-3"
                        />
                        <p className="font-[400] text-[15px]">
                          {props.address}
                        </p>
                      </div>
                    </div>
                    <div className="mb-[20px] font-lato">
                      <h1 className="font-[600] text-[15px] mb-[8px]">
                        MOBILE
                      </h1>
                      <div className="flex flex-row items-center justify-start">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="w-[22px] p-3"
                        />
                        <p className="font-[400] text-[15px]">
                          {props.phone} (24/7 Support Line)
                        </p>
                      </div>
                    </div>
                    <div className="mb-[20px] font-lato">
                      <h1 className="font-[600] text-[15px] mb-[8px]">EMAIL</h1>
                      <div className="flex flex-row items-center justify-start">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="w-[22px] p-3"
                        />
                        <p className="font-[400] text-[15px]">{props.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full h-[30px] justify-around">
                  <a href={props.facebook}>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-full h-full"
                    />
                  </a>
                  <a href={props.linkedin}>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="w-full h-full"
                    />
                  </a>
                  <a href={props.twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="w-full h-full"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
