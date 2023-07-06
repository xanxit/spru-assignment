import React from 'react'

export default function TestCard({img, name, message, job}) {
  return (
    <div className='bg-slate-200'>
        <div className=''>
            <div className='h-[100px] w-[100px] rounded-full shadow-lg flex items-center justify-center bg-white'>
            <img src={img} alt="" className='h-[90px] w-[90px] rounded-full mx-auto' />
            </div>
        </div>
        <div id='textContainer'>
            <p>{message}</p>
            <h1>{name}</h1>
            <p className='font-lato italic'>Proprietor</p>
            <p className='font-lato italic break-words'>{job}</p>
        </div>
    </div>
  )
}
