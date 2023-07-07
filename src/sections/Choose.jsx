import React from 'react'
import ChooseCard from '../components/ChooseCard'

export default function Choose(props) {
  return (
    <div className='relative bg-industryParallax bg-cover bg-fixed'>
      <div className='w-full bg-gradient-to-br from-primary/90 to-secondary/90'>
      <div className='pt-[30px] sm:pt-[70px] text-center px-[15px] text-white xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto' >
        <h1 className='mb-[39px] text-[38px] sm:text-[28px] font-[700] leading-[38px]'>Why Choose Us</h1>
        <p className='mb-[24px] sm:mb-[50px] sm:pt-[10px] max-w-[700px] mx-auto'>We are Manufacturing Cleaning Chemicals For Commercials, Industrials, Hotels, Hospitals, Institutions, Theaters, Shopping malls, Offices, NGOs..</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[30px] pb-[30px] relative z-30'>
            {(props.data).map((record, index) => {
                return <ChooseCard key={index} {...record}/>
            })}
        </div>
        
    </div>
      </div>
    <div className='absolute bottom-0 w-full bg-white h-[130px]'></div>
    </div>
     
  )
}
