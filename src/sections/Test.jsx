import React from 'react'

export default function Test(props) {
  return (
    <div className='flex'>
      {(props.data.productImages).map((record,index)=>{
        return <img src={record}  key={index} alt="" />
      })}
      {(props.data.productImages).map((record,index)=>{
        return <img src={record}  key={index} alt="" />
      })}

    </div>
  )
}
