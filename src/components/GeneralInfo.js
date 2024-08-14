import React, { useState } from "react";


const GeneralInfo = ({setGeneralInfo}) => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [editMode, setEditMode] = useState(true);
  // handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedInfo = { ...info, [name]: value };
    setInfo(updatedInfo);
    setGeneralInfo(updatedInfo);
  };

  // function to toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };


  return (
    <div className=" info-block">
      <h2>General information</h2>
      {editMode ? (
        <div className="form-item">
          <input
            type="text"
            placeholder="First Name"
            value={info.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={info.lastName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={info.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={info.phone}
            onChange={handleInputChange}
          />
          <div className="button-group">
            <button type="button" onClick={toggleEditMode}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>Name: {info.firstName} {info.lastName}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={toggleEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
};
export default GeneralInfo;
