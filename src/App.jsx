import React from 'react'
import Welcome from './sections/Welcome'
import Choose from './sections/Choose'
import Products from './sections/Products'
import Industry from './sections/Industry'

import dataObject from './data.json'

export default function App() {

  return (
    <>
      <div className='bg-white'>
        <Welcome data={dataObject.welcomeCard}/>
        <Choose data={dataObject.chooseCard}/>
        
        <Industry data={dataObject.industryCard}/>
      </div>
    </>
  )
}
