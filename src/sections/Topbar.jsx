import React from 'react'

export default function Topbar(props) {
  return (
    <div className='hidden md:block py-[10px] w-full'>
        <div className='mx-auto flex flex-row md:max-w-[960px] lg:max-w-[1200px] px-[15px]'>
        <img src={props.data.logo} alt="" className='max-w-[300px] h-[56px] mr-auto'/>
        <div className='pl-[55px] flex flex-col  justify-center'>
            <h1 className='font-rubik text-[15px] font-[400] text-[#b0b0b0] mb-[3px]'>MAIL US ON</h1>
            <h1 className='font-rubik text-[16px] font-[500] text-black leading-[22px]'>{props.data.email}</h1>
        </div>
        <div className='pl-[55px] flex flex-col justify-center'>
            <h1 className='font-rubik text-[15px] font-[400] text-[#b0b0b0] mb-[3px]'>OFFICE OPENED</h1>
            <h1 className='font-rubik text-[16px] font-[500] text-black leading-[22px]'>{props.data.hours} <span className='text-[#b0b0b0]'> Sun Off</span></h1>
        </div>
        </div>
    </div>
  )
}
