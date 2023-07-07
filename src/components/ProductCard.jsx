import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='shrink-0 snap-start mb-[30px]'>
        <img src={props.img} alt="" className='shadow-xl xs:w-[240px] sm:w-[330px] md:w-[450px] lg:w-[370px] h-auto ' />
    </div>
  )
}
