import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='shrink-0 snap-start group relative overflow-hidden'>
      
        <img src={props.img} alt="" className='shadow-xl xs:w-[240px] sm:w-[330px] md:w-[450px] lg:w-[370px] h-auto group-hover:scale-125 transition-all duration-200' />
        <div className='absolute w-full group-hover:translate-y-[-100%] bg-gradient-to-t from-black/60 to-black/0 transition-all duration-200 bottom-[-100%] z-10 grid place-items-center h-full'>
          <button className='w-[130px] bg-white text-black font-[800] h-[50px] text-[20px] rounded-sm inset-0'>Buy Now</button>
        </div>
        
    </div>
  )
}
