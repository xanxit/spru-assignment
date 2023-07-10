import React from 'react'
import PageHeader from '../../components/PageHeader'

export default function About({dataObject}) {
  return (
    <div>
      <PageHeader {...dataObject.page_aboutUs}/>
    </div>
  )
}
