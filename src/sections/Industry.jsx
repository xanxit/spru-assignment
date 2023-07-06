import React from 'react'
import IndustryCard from '../components/IndustryCard'

export default function Industry(props) {
  return (
    <div className='w-full pb-[50px] pt-[30px] text-white bg-green-200'>
        <div className='px-[15px] text-center sm:max-w-[720px] md:max-w-[960px] mx-auto'>
        <h1 className='text-[28px] mb-[29px] leading-[38px] font-[700]'>INDUSTRIES WE SERVE</h1>
        <p className='max-w-[700px] leading-[24px] text-[16px] mb-[24px] font-lato mx-auto'>We are happy to announce to you that we are providing services to a different kind of sectors from government to non-government, NGO’S, corporate company’s & central government also...</p>
        <div className='grid grid-cols-2 gap-[30px] md:grid-cols-3'>
            {(props.data).map((record, index) => {
                return <IndustryCard key={index} {...record}/>
            })}
        </div>
        </div>
        
    </div>
  )
}
