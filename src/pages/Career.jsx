import React from 'react'
import Form from '../components/Form'

export default function Career({forms,listings}) {
  return (
    <div>
        <Form title={forms.career} listings={listings}/>
    </div>
  )
}
