import React from 'react'
import Form from '../components/Form'
import PageHeader from '../components/PageHeader'

export default function Distributor({forms,info}) {
  const pageName = "Distributor"
  return (
    <div>
        <PageHeader title={pageName}/>
        <Form title={forms.distributor} {...info}/>
    </div>
  )
}
