import React from 'react'

export default function ChooseCard({img, title}) {
  return (
    <div className='bg-white text-center rounded-[6px] px-[10px] py-[30px] hover:bottom-10 relative'>
    <div id='imgContainer' className='rounded-full overflow-hidden mb-[15px]'>
        <img src={img} alt="" className='w-[60px] h-[60px] mx-auto' />
    </div>
    <div id='textContainer'>
        <h4 className='uppercase font-[500] leading-[28px] text-[18px] text-[#212529]'>{title}
        </h4>
    </div>
    </div>
  )
}
