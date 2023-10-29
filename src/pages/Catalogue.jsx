import React from "react";
import PageHeader from "../components/PageHeader";
import PdfView from "../components/PdfView";

export default function Catalogue({ title, images, pdfContent }) {
  return (
    <div>
      <PageHeader title={title} />

      <div className="w-full py-[70px]">
        <div className="max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto px-[15px]">
          <div>
            <a href="/product-portfolio.pdf" className="">
              {pdfContent.map((pdf, index) => {
                return <PdfView {...pdf} key={index}/>;
              })}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
