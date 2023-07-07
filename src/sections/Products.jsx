import React from 'react'
import ProductCard from '../components/ProductCard'


export default function Products(props) {
  return (
    <div className='pb-[20px] pt-[30px] sm:pt-[70px] sm:pb-[40px] text-center'>
      <div className='xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto mb-[10px] font-[700] text-[38px] '>
        <h1 className='sm:mb-[78px] mb-[43px]'>Our Products</h1>
      <div className='flex overflow-x-auto gap-[30px] snap-x snap-mandatory'>
      {(props.data).map((record, index) => {
        return <ProductCard key={index} img={record}/>
      })}

    </div>
      </div>
    </div>
  )
}
