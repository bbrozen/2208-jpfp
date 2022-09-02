import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCampusAsync } from "../../store/campusReducer";

function CreateCampus(){

    const [campusName, setCampusName] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(addCampusAsync({ name:campusName, address }));
        setAddress("");
        setCampusName("");
    };

    return (
        <form id="campus-form" onSubmit={handleSubmit}>
          <label htmlFor="campusName">Campus Name:</label>
          <input
            name="campusName"
            value={campusName}
            onChange={(e) => setCampusName(e.target.value)}
          />
    
          <label htmlFor="address">Address:</label>
          <input
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
    
          <button type="submit">Submit</button>
          <Link to="/">Cancel</Link>
        </form>
      );

}

export default CreateCampus;