import React from "react";

export default function Footer(props) {
  return (
    <div className="w-full bg-[#072d5a]">
      <div className="pt-[30px] xs:pt-[50px] xs:pb-[20px]">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
          <div>
            <div>
              <img src={props.data.info.logo} alt="" />
            </div>
            <p>{props.data.info.about}</p>
          </div>
          <div>
            <h1 className="uppercase">quick links</h1>
            <div>
              <ul>
                {props.data.links.map((record, index) => {
                  return (
                    <li key={index} className="">
                      {record}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <h1 className="">
                GET IN TOUCH
            </h1>
            <div>
                <div>
                    <h1 className="">ADDRESS</h1>
                    <p>{props.data.info.address}</p>
                </div>
                <div>
                    <h1 className="">MOBILE</h1>
                    <p>{props.data.info.phone}</p>
                </div>
                <div>
                    <h1 className="">EMAIL</h1>
                    <p>{props.data.info.email}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
