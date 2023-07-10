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

export default function App() {
  return (
    <>
      <Router>
      <Topbar data={dataObject.info}/>
        <StickyNav data={dataObject.products} logo={dataObject.info} navList={dataObject.navList}/>
        <Routes>
          <Route path='/spru-assignment' element={<Home dataObject={dataObject}/>}></Route>
          <Route path='/spru-assignment/about' element={<About dataObject={dataObject}/>}></Route>
          <Route path='/spru-assignment/vision' element={<Vision dataObject={dataObject}/>}></Route>
          <Route path='/spru-assignment/principles' element={<Principles dataObject={dataObject}/>}></Route>
          <Route path='/spru-assignment/catalogue' element={<Catalogue dataObject={dataObject}/>}></Route>
        </Routes>
        <Footer dataObject={dataObject}/>
      </Router>
    </>
  )
}
