import React from 'react'

export default function WelcomeCard({img, title, content}) {
  return (
    <div className='flex flex-row gap-[10px] mb-[40px] px-[15px]'>
        <div className='rounded-full flex-shrink-0 w-[80px]'>
            <img src={img} alt="" className='w-[70px] h-[70px] mx-auto' />
        </div>
        <div>
            <h4 className='text-[20px] font-[500] mb-[10px] leading-[22px]'>{title}</h4>
            <p className='text-[15px] font-lato font-[400]'>{content}</p>
        </div>
    </div>
  )
}
