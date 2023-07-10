import React from 'react'
import PageHeader from '../components/PageHeader'

export default function Gallery({title,images}) {
  return (
    <div>
        <PageHeader title={title}/>
        <div className='w-full py-[70px]'>
            <div className="max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto px-[15px]">
                <div className='grid grid-cols-1 xs:grid-cols-2 gap-[30px]'>
                    {images.map((image,index) => {
                        return <div key={index} className='relative group overflow-hidden'>
                            <img src={image} alt="" className='w-full h-auto group-hover:scale-125 transition-all duration-300'/>
                            <div className='absolute w-full h-full inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100'/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
