import React from 'react'

export default function PdfView({img, link}) {
  return (
    <div className='max-w-[50%] sm:max-w-[25%] group '>
        <div className='w-full'>
            <div className='relative'>
            <div className='overflow-hidden'>
                <img src={img} alt="" className='group-hover:scale-125 duration-200 transition-all' />
            </div>
            <div className='absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-200'/>
            </div>
            <div className='p-[10px] flex items-center justify-center text-blue-700'>
                <a href={link} target='_blank'>
                Download PDF
                </a>    
            </div>
            
        </div>
    </div>
  )
}
