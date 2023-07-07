import React from 'react'
import TestCard from '../components/TestCard'

export default function Testimonials(props) {
  return (
    <div className='py-[30px] sm:py-[70px] text-center'>
        <div className='mb-[38px] sm:mb-[63px]'>
        <h1 className='font-sans text-[28px] sm:text-[38px] mb-[5px] sm:mb-[15px] leading-[38px] font-[700] '>Our Testimonials</h1>
        </div>
        <div>
            {(props.data).map((record, index) => {
                return <TestCard key={index} {...record}/>
            })}
        </div>
    </div>
  )
}
