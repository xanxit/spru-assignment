import React from 'react'
import Form from '../components/Form'

export default function Contact({forms, info}) {
  return (
    <div>
      <Form title={forms.contact} {...info}/>
    </div>
  )
}
