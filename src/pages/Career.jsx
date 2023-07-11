import React from 'react'
import Form from '../components/Form'
import PageHeader from '../components/PageHeader'

export default function Career({forms,listings}) {
  const pageName = "Career"
  return (
    <div>
        <PageHeader title={pageName}/>
        <Form title={forms.career} listings={listings}/>
    </div>
  )
}
