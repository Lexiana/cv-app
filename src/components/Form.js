import React from 'react'
import GeneralInfo from './GeneralInfo'
import '../styles/Form.css'
import Education from './Education'
import Experience from './Experience'

const Form = () => {
  return (
    <div>
        <h1>Edit your CV</h1>
        <GeneralInfo />
        <Education />
        <Experience />
    </div>
    
  )
}

export default Form