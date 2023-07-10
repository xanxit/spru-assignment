import React from 'react'
import PageHeader from '../components/PageHeader'
import PdfView from '../components/PdfView'

export default function Catalogue({title, images, pdfContent}) {
  return (
    <div>
      <PageHeader title={title}/>
      
      <div className='w-full py-[70px]'>
        <div className='max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto px-[15px]'>
        <div>
        <div className='flex flex-row gap-[30px] mb-[50px]'>
          {pdfContent.map((pdf, index)=>{
            return <PdfView {...pdf} className="w-[25%]"/>
          })}
        </div>
      </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-[30px]'>
            {images.map((image,index) => {
              return <div className='relative group overflow-hidden' key={index}> 
                <img src={image} alt="" className='group-hover:scale-125 transition-all duration-200 w-full'/>
              </div> 
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
