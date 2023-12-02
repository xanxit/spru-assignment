import React from "react";
import Welcome from "../sections/Welcome";
import Choose from "../sections/Choose";
import Products from "../sections/Products";
import Industry from "../sections/Industry";
import Testimonials from "../sections/Testimonials";

import Hero from "../sections/Hero";

import ScrollToTop from "../components/ScrollToTop";

export default function Home({ dataObject }) {
  return (
    <div className="bg-white">
      <ScrollToTop />

      <Hero data={dataObject.heroImages} />
      <Welcome data={dataObject.welcomeCard} />
      <Choose data={dataObject.chooseCard} />
      {/* <Products data={dataObject.productImages} /> */}
      <Industry data={dataObject.industryCard} />
      {/* <Testimonials data={dataObject.testCard} /> */}
    </div>
  );
}
