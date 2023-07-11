import React from 'react'
import {useParams} from 'react-router-dom'

export default function Product(productList) {
    const { id } = useParams();
    const product = productList[id];
  return (
    <div className='pb-[50px] w-full'>
        <div className='max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto px-[15px]'>
            <div className='flex flex-col sm:flex-row gap-[30px]'>
                <div className='w-full sm:w-[33%] shrink-0 overflow-hidden'>
                    <div className='w-[200%] grid grid-cols-2'>
                        {(product.image).map((img,index)=>{
                            return <img src={img} alt="" key={index} className='w-full h-auto'/>
                        })}
                    </div>
                </div>
                <div>
                    <div>
                    <h1>{product.name}</h1>
                    <p>{product.desc}</p>
                    </div>
                    <div>
                        <h1>Key Benefit</h1>
                        <ul>
                            {(product.benefit).map((point, index) => {
                                return <li className='' key={index}>{point}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        <h1>Availability</h1>
                        <ul>
                            {(product.availability).map((size,index) => {
                                return <li className='' key={index}>{size}</li> 
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
