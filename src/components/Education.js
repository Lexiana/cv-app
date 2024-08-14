import React, { useState } from "react";
import EducationForm from "./EducationForm";

const Education = () => {
  // State to manage multiple education entries
  const [educationList, setEducationList] = useState([
    { school: "", title: "", date: "", editMode: true },
  ]);

  // Function to add new education form
  const addEducationForm = () => {
    setEducationList([
      ...educationList,
      { school: "", title: "", date: "", editMode: true },
    ]);
  };

  // Function to update a specific education entry
  const updateEducationEntry = (index, updatedEntry) => {
    const newEducationList = [...educationList];
    newEducationList[index] = updatedEntry;
    setEducationList(newEducationList);
  };

  // Function to delete a specific education entry
  const deleteEducationEntry = (index) => {
    const newEducationList = educationList.filter((_, i) => i !== index);
    setEducationList(newEducationList);
  };

  return (
    <div className="info-block">
      <h2>Education</h2>

      {educationList.map((education, index) => (
        <div className="entry-block">
          <EducationForm
            key={index}
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
