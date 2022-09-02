import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addStudentAsync } from "../../store/studentReducer";

function CreateStudent(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(addStudentAsync({ firstName, lastName, email }));
        setFirstName("");
        setLastName("");
        setEmail("");
    };

    return (
        <form id="student-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
    
          <label htmlFor="lastName">Last Name:</label>
          <input
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="email">Email::</label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

    
          <button type="submit">Submit</button>
          <Link to="/">Cancel</Link>
        </form>
      );

}

export default CreateStudent;