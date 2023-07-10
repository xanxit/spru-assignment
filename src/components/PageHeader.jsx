import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHeader({title}) {
  return (
    <div className='relative h-[300px] w-full flex items-center justify-center bg-pageHeader bg-cover'>
  <div className='absolute inset-0 bg-black opacity-30'></div>
  <div className='relative z-10 text-white text-[28px] leading-[30px] font-[700]'>
    {title}
  </div>
  <div className='absolute bottom-0 w-full flex items-center justify-center p-[20px]'>
  <span className='relative z-10 text-white font-lato text-[16px] font-[400] '><Link to="/spru-assignment/" className='text-blue-400'>Home </Link>/ {title}</span>
  <div className='bg-black w-full h-full absolute bottom-0 opacity-[60%] text-white'/>
  </div>
</div>

  )
}
