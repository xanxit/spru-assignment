import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function Product(productList) {
  const { id } = useParams();
  const product = productList[id];
  const carouselRef = useRef(null);
  let c = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.scrollBy({
        left: c == product.image.length ? -2000 : 200,
        behaviour: "smooth",
      });
      c == product.image.length ? (c = 0) : c++;
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full">
      <PageHeader {...product} />
      <div className="py-[70px]">
        <div className="max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto px-[15px]">
          <div className="flex flex-col sm:flex-row gap-[30px]">
            <div className="w-full sm:w-[33%] shrink-0 ">
              <div
                className="flex flex-nowrap overflow-x-scroll snap-x snap-mandatory py-6"
                ref={carouselRef}
              >
                {product.image.map((img, index) => {
                  return (
                    <img
                      src={img}
                      alt=""
                      key={index}
                      className="w-full h-auto snap-center"
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <div>
                <h1 className="uppercase font-[500] text-[30px]">
                  {product.title}
                </h1>
                <p className="mb-[24px] font-lato">{product.desc}</p>
              </div>
              <div>
                <h1 className="font-[500] text-[30px]">Key Benefit</h1>
                <ul className="mb-[24px] font-lato list-disc px-[20px]">
                  {product.benefit.map((point, index) => {
                    return (
                      <li className="py-[5px]" key={index}>
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h1 className="font-[500] text-[30px]">Availability</h1>
                <ul className="list-disc px-[20px]">
                  {product.availability.map((size, index) => {
                    return (
                      <li className="py-[5px]" key={index}>
                        {size}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
