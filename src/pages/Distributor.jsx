import React from 'react'
import Form from '../components/Form'

export default function Distributor({forms,info}) {
  return (
    <div>
        <Form title={forms.distributor} {...info}/>
    </div>
  )
}
