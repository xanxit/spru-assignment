import React from 'react'

export default function Hero(props) {
  return (
    <div className='w-full flex overflow-x-hidden'>
        {(props.data).map((record, index) => {
            return <img src={record} alt="" className='w-full shrink-0' key={index} />
        })}
    </div>
  )
}
