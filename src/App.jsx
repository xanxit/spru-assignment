import React from 'react'

import dataObject from './data.json'

import Welcome from './sections/Welcome'
import Choose from './sections/Choose'
import Products from './sections/Products'
import Industry from './sections/Industry'
import Testimonials from './sections/Testimonials'
import Topbar from './sections/Topbar'
import StickyNav from './components/StickyNav'
import Hero from './sections/Hero'
import Footer from './sections/Footer'

export default function App() {

  return (
    <>
      <div className='bg-white'>
        <Topbar data={dataObject.info}/>
        <StickyNav data={dataObject.products} logo={dataObject.info}/>
        <Hero data={dataObject.heroImages}/>
        <Welcome data={dataObject.welcomeCard}/>
        <Choose data={dataObject.chooseCard}/>
        
        <Industry data={dataObject.industryCard}/>
        <Testimonials data={dataObject.testCard}/>
        <Footer data={dataObject}/>
      </div>
    </>
  )
}
