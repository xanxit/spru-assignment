import React from 'react'
import ChooseCard from '../components/ChooseCard'

export default function Choose(props) {
  return (
    <div className='pt-[30px] bg-slate-400 text-center px-[15px] text-white'>
        <h1 className='mb-[39px] text-[38px] font-[700] leading-[38px]'>Why Choose Us</h1>
        <p className='mb-[24px]'>We are Manufacturing Cleaning Chemicals For Commercials, Industrials, Hotels, Hospitals, Institutions, Theaters, Shopping malls, Offices, NGOs..</p>
        <div className='grid grid-cols-2 gap-[30px] pb-[30px]'>
            {(props.data).map((record, index) => {
                return <ChooseCard key={index} {...record}/>
            })}
        </div>
    </div>
  )
}
