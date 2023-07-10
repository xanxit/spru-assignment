import React from 'react'

import dataObject from './data.json'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Topbar from './sections/Topbar'
import StickyNav from './components/StickyNav'
import About from './pages/Company/About';
import Principles from './pages/Company/Principles';
import Vision from './pages/Company/Vision';
import Footer from './sections/Footer'
import Catalogue from './pages/Catalogue';
import Certificates from './pages/Certificates';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Router>
      <Topbar data={dataObject.info}/>
        <StickyNav data={dataObject.products} logo={dataObject.info} links={dataObject.links}/>
        <Routes>
          <Route path='/spru-assignment' element={<Home dataObject={dataObject}/>}/>
          <Route path='/spru-assignment/about' element={<About {...dataObject.ourCompany}/>}/>
          <Route path='/spru-assignment/vision' element={<Vision {...dataObject.ourCompany}/>}/>
          <Route path='/spru-assignment/principles' element={<Principles {...dataObject.ourCompany}/>}/>
          <Route path='/spru-assignment/catalogue' element={<Catalogue {...dataObject.catalogue}/>}/>
          <Route path='/spru-assignment/certificates' element={<Certificates {...dataObject.certificates}/>}/>
          <Route path='/spru-assignment/gallery' element={<Gallery {...dataObject.gallery}/>}/>
          <Route path='/spru-assignment/contact' element={<Contact {...dataObject.contact}/>}/>
        </Routes>
        <Footer dataObject={dataObject}/>
      </Router>
    </>
  )
}
