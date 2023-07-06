import React from 'react'
import TestCard from '../components/TestCard'

export default function Testimonials(props) {
  return (
    <div>
        <h1>Our Testimonials</h1>
        <div>
            {(props.data).map((record, index) => {
                return <TestCard key={index} {...record}/>
            })}
        </div>
    </div>
  )
}
