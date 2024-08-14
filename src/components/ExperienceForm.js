import React from 'react'

const ExperienceForm = ({
    index,
    experience,
    updateExperienceEntry,
    deleteExperienceEntry
}) => {

    // handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target
        const updatedEntry = { ...experience, [name]: value }
        updateExperienceEntry(index, updatedEntry)
    }

    // Function to toggle edit mode
    const toggleEditMode = () => {
        const updatedEntry = { ...experience, editMode: !experience.editMode }
        updateExperienceEntry(index, updatedEntry)
    }

  return (
    <div className="experience-form">
        {experience.editMode ? (
            <div className="form-item">
                <input
                    type="text"
                    id={`position-${index}`}
                    name="position"
                    placeholder="Position"
                    value={experience.position}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    id={`company-${index}`}
                    name="company"
                    placeholder="Company"
                    value={experience.company}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    id={`city-${index}`}
                    name="city"
                    placeholder="City"
                    value={experience.city}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    id={`startDate-${index}`}
                    name="startDate"
                    placeholder="Start Date"
                    value={experience.startDate}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    id={`endDate-${index}`}
                    name="endDate"
                    placeholder="End Date"
                    value={experience.endDate}
                    onChange={handleInputChange}
                />
                <input  
                    type="text"
                    id={`description-${index}`}
                    name="description"
                    placeholder="Description"
                    value={experience.description}
                    onChange={handleInputChange}   
                />

                <div className='button-group'>
                    <button type='button' onClick={toggleEditMode}>Save</button>
                    <button type='button' onClick={() => deleteExperienceEntry(index)}>Delete</button>
                </div>
            </div>
        ):(
            <div className="experience-display">
                <p>{experience.position}</p>
                <p>{experience.company}</p>
                <p>{experience.city}</p>
                <p>{experience.startDate} - {experience.endDate}</p>
                <p>{experience.description}</p>
                <button type='button' onClick={toggleEditMode}>
                    Edit
                </button>
            </div>
        )}
    </div>
  )
}

export default ExperienceForm