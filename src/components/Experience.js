import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm";

const Experience = ({setExperienceList}) => {
  // State to manage multiple experience entries
  const [experienceList, updateExperienceList] = useState([
    {
      id: "experience-1",
      position: "",
      company: "",
      city: "",
      startDate: "",
      endDate: "",
      description: "",
      editMode: true,
    },
  ]);

  // function to add new experience form
  const addExperienceForm = () => {
    const newExperienceList = [...experienceList,
      {
        id: `experience-${Date.now()}`,
        position: "",
        company: "",
        city: "",
        startDate: "",
        endDate: "",
        description: "",
        editMode: true,
      }];
    updateExperienceList(newExperienceList);
    // update info to parent
    setExperienceList(newExperienceList);
  };

  // function to update a specific experience entry
  const updateExperienceEntry = (index, updatedEntry) => {
    const newExperienceList = [...experienceList];
    newExperienceList[index] = updatedEntry;
    updateExperienceList(newExperienceList);
    // update info to parent
    setExperienceList(newExperienceList);
  };

  // function to delete a specific experience entry
  const deleteExperienceEntry = (index) => {
    const newExperienceList = experienceList.filter((_, i) => i !== index);
    updateExperienceList(newExperienceList);
    // update info to parent
    setExperienceList(newExperienceList);
  };

  return (
    <div className="info-block">
      <h2>Experience</h2>

      {experienceList.map((experience, index) => (
        <div className="entry-block" key={experience.id}>
          <ExperienceForm
            index={index}
            experience={experience}
            updateExperienceEntry={updateExperienceEntry}
            deleteExperienceEntry={deleteExperienceEntry}
          />
        </div>
      ))}

      <div className="button-group">
        <button type="button" onClick={addExperienceForm}>Add</button>
      </div>
    </div>
  );
};

export default Experience;
