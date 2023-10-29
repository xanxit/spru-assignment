import React from "react";
import Form from "../components/Form";
import PageHeader from "../components/PageHeader";

export default function Contact({ forms, info }) {
  const pageName = "Contact";
  return (
    <div>
      <PageHeader title={pageName} />
      <Form title={forms.contact} {...info} />
      <div>
        <div className="max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto px-[15px]">
          <h1 className="text-[24px] font-[800] mb-[25px]">Our Location</h1>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14226.450121898419!2d81.08596664334715!3d26.947495477345658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48c68d43a12ff543!2sSPRU%20PRODUCTS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1609854679976!5m2!1sen!2sin" className="pb-[50px]"
            width="100%"
            height="350"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}
