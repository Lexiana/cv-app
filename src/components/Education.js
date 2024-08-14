import React, { useState } from "react";
import EducationForm from "./EducationForm";

const Education = ({ setEducationList }) => {
  // State to manage multiple education entries
  const [educationList, updateEducationList] = useState([
    {
      id: "education-1",
      school: "",
      title: "",
      year: "",
      editMode: true,
    },
  ]);

  // Function to add new education form
  const addEducationForm = () => {
    const newEducationList = [
      ...educationList,
      {
        id: `education-${Date.now()}`,
        school: "",
        title: "",
        year: "",
        editMode: true,
      },
    ];
    updateEducationList(newEducationList);
    // update info to parent
    setEducationList(newEducationList);
  };

  // Function to update a specific education entry
  const updateEducationEntry = (index, updatedEntry) => {
    const newEducationList = [...educationList];
    newEducationList[index] = updatedEntry;
    updateEducationList(newEducationList);
    // update info to parent
    setEducationList(newEducationList);
  };

  // Function to delete a specific education entry
  const deleteEducationEntry = (index) => {
    const newEducationList = educationList.filter((_, i) => i !== index);
    updateEducationList(newEducationList);
    // update info to parent
    setEducationList(newEducationList);
  };

  return (
    <div className="info-block">
      <h2>Education</h2>

      {educationList.map((education, index) => (
        <div className="entry-block" key={education.id}>
          <EducationForm
            
            index={index}
            education={education}
            updateEducationEntry={updateEducationEntry}
            deleteEducationEntry={deleteEducationEntry}
          />
        </div>
      ))}
      <div className="button-group">
        <button type="button" onClick={addEducationForm}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Education;
