import React from "react";

const EducationForm = ({
  index,
  education,
  updateEducationEntry,
  deleteEducationEntry,
}) => {
  // handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedEntry = { ...education, [name]: value };
    updateEducationEntry(index, updatedEntry);
  };

  // Function to toggle edit mode
  const toggleEditMode = () => {
    const updatedEntry = { ...education, editMode: !education.editMode };
    updateEducationEntry(index, updatedEntry);
  };

  return (
    <div>
      {education.editMode ? (
        <div className="form-item">
          <input
            type="text"
            id={`school-${index}`}
            name="school"
            placeholder="School Name"
            value={education.school}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id={`title-${index}`}
            name="title"
            placeholder="Degree Title"
            value={education.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id={`year-${index}`}
            name="year"
            placeholder="Year of Graduation"
            value={education.date}
            onChange={handleInputChange}
          />

          <div className="button-group">
            <button type="button" onClick={toggleEditMode}>
              Save
            </button>
            <button type="button" onClick={() => deleteEducationEntry(index)}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>{education.school}</p>
          <p>{education.title}</p>
          <p>{education.year}</p>
          <button type="button" onClick={toggleEditMode}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationForm;
