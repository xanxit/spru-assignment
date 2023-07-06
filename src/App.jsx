import React from 'react'
import Welcome from './sections/Welcome'
import Choose from './sections/Choose'
import Products from './sections/Products'
import Industry from './sections/Industry'
import Testimonials from './sections/Testimonials'
import Topbar from './sections/Topbar'

import dataObject from './data.json'

export default function App() {

  return (
    <>
      <div className='bg-white'>
        <Topbar data={dataObject.info}/>
        <Welcome data={dataObject.welcomeCard}/>
        <Choose data={dataObject.chooseCard}/>
        
        <Industry data={dataObject.industryCard}/>
        <Testimonials data={dataObject.testCard}/>
      </div>
    </>
  )
}
