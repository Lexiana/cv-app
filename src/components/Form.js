import React, { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Experience from './Experience'
import CVPreview from './CVPreview'
import '../styles/Form.css'

const Form = () => {

  // State to get information from cv edit form
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [educationList, setEducationList] = useState([{
    school: '',
    title: '',
    date: '',
  }]);
  const [experienceList, setExperienceList] = useState([{
    position: '',
    company: '',
    city: '',
    startDate: '',
    endDate: '',
    description: '',
  }]);
  const [submitted, setSubmitted] = useState(false);

  // Function to submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h1>Edit your CV</h1>
          <GeneralInfo setGeneralInfo={setGeneralInfo} />
          <Education setEducationList={setEducationList} />
          <Experience setExperienceList={setExperienceList} />
          <button type="submit">Submit</button>
        </form>
      ):(
        <div>
          <CVPreview
            generalInfo={GeneralInfo}
            educationList={educationList}
            experienceList={experienceList}
          />
        </div>
      )}
        
    </div>
  )
}

export default Form