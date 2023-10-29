import React from "react";

import dataObject from "./data.json";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topbar from "./sections/Topbar";
import StickyNav from "./components/StickyNav";
import About from "./pages/Company/About";
import Principles from "./pages/Company/Principles";
import Vision from "./pages/Company/Vision";
import Footer from "./sections/Footer";
import Catalogue from "./pages/Catalogue";
import Certificates from "./pages/Certificates";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Career from "./pages/Career";
import Distributor from "./pages/Distributor";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Router>
        <Topbar data={dataObject.info} />
        <StickyNav
          data={dataObject.productList}
          logo={dataObject.info}
          links={dataObject.links}
        />
        <Routes>
          <Route
            path="/"
            element={<Home dataObject={dataObject} />}
          />
          <Route
            path="/about"
            element={<About {...dataObject.ourCompany} />}
          />
          <Route
            path="/vision"
            element={<Vision {...dataObject.ourCompany} />}
          />
          <Route
            path="/principles"
            element={<Principles {...dataObject.ourCompany} />}
          />
          <Route
            path="/catalogue"
            element={<Catalogue {...dataObject.catalogue} />}
          />
          <Route
            path="/certificates"
            element={<Certificates {...dataObject.certificates} />}
          />
          <Route
            path="/gallery"
            element={<Gallery {...dataObject.gallery} />}
          />
          <Route
            path="/career"
            element={<Career {...dataObject} />}
          />
          <Route
            path="/distributor"
            element={<Distributor {...dataObject} />}
          />
          <Route
            path="/contact"
            element={<Contact {...dataObject} />}
          />
          <Route
            path="/product/:id"
            element={<Product {...dataObject.productList} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer dataObject={dataObject} />
      </Router>
    </>
  );
}
