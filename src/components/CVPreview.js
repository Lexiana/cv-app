import React from 'react'
import '../styles/CVPreview.css'

const CVPreview = ({generalInfo, educationList, experienceList}) => {
  return (
    <div className='cv-preview'>
        <h2>{generalInfo.firstName} {generalInfo.lastName}</h2>
        <div className='general-info'>
            <p><strong>Email:</strong>{generalInfo.email}</p>
            <p><strong>Phone:</strong>{generalInfo.phone}</p>
        </div>
        <div className='Education'>
            <h3>Education</h3>
            {educationList.map((education, index) => (
                <div key={index} className='education-item'>
                    <h4>{education.title}</h4>
                    <p><strong>Date:</strong>{education.date}</p>
                    <p>{education.school}</p>
                </div>
            ))}
        </div>
        <div className='Experience'>
            <h3>Experience</h3>
            {experienceList.map((experience, index) => (
                <div key={index} className='experience-item'>
                    <h4>{experience.position}</h4>
                    <p>{experience.startDate} - {experience.endDate}</p>
                    <p>{experience.company} - {experience.city}</p>
                    <p>{experience.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CVPreview