import React from 'react'
import '../styles/CVPreview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const CVPreview = ({generalInfo, educationList, experienceList}) => {
  return (
    <div className='cv-preview'>
        <h2 className='name'>{generalInfo.firstName} {generalInfo.lastName}</h2>
        <div className='general-info'>
            <h3>Contact</h3>
            <p><FontAwesomeIcon className='contact-icon' icon={faEnvelope} />{generalInfo.email}</p>
            <p><FontAwesomeIcon className='contact-icon' icon={faPhone} />{generalInfo.phone}</p>
        </div>
        <div className='Education'>
            <h3><FontAwesomeIcon icon={faGraduationCap} /> Education</h3>
            {educationList.map((education, index) => (
                <div key={index} className='education-item'>
                    <h4>{education.title}</h4>
                    <p>{education.year}</p>
                    <p>{education.school}</p>
                </div>
            ))}
        </div>
        <div className='Experience'>
            <h3><FontAwesomeIcon icon={faBriefcase} /> Experience</h3>
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