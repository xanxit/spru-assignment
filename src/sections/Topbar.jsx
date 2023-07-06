import React from 'react'

export default function Topbar(props) {
  return (
    <div className='hidden md:block py-[10px] w-full'>
        <div className='mx-auto flex flex-row'>
        <img src={props.data.logo} alt="" className='max-w-[300px] mr-auto'/>
        <div className='pl-[40px]'>
            <h1 className='uppercase'>call us on</h1>
            <h1 className=''>{props.data.phone}</h1>
        </div>
        <div>
            <h1 className='uppercase font-rubik text-'>office opened</h1>
            <h1>{props.data.hours} <span> Sun Off</span></h1>
        </div>
        </div>
    </div>
  )
}
