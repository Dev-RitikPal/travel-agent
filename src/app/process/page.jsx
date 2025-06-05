import React from 'react'
import ProcessBanner from './ProcessBanner'
import ProcessWork from './ProcessWork'
import Process from './Process'
import Form from '../home/Form'


function page() {
  return (
    <div>
        <ProcessBanner/>
        <ProcessWork/>
        <Process/>
        <Form/>
      
    </div>
  )
}

export default page
