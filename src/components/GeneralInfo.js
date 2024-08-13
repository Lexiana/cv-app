import React, { useState } from "react";


const GeneralInfo = () => {
  // user info variables for input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // Start edit mode
  const [editMode, setEditMode] = useState(true);

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div className=" info-block">
      <h2>General information</h2>
      {editMode ? (
        <form onSubmit={handleSubmit} className="form-item">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="button-group">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditMode(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p>Name: {firstName} {lastName}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};
export default GeneralInfo;
