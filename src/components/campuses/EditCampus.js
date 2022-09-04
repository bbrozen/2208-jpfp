import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchCampusesAsync } from "../../store/campusReducer";

import { fetchSingleCampus } from "../../store/singleCampusSlice";
import { selectSingleCampus } from "../../store/singleCampusSlice";
import { editCampusAsync } from "../../store/campusReducer";
 
function EditCampus() {
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;
    const campus = useSelector(selectSingleCampus)

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        dispatch(fetchSingleCampus(id));
      }, [dispatch, name, address]);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await dispatch(editCampusAsync({ id, name, address }));
      };

    return (
        <div>
            <form id="campus-form" onSubmit={handleSubmit}>
        <label htmlFor="campusName">New Name:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="address">New Address:</label>
        <input
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="button-box">
          <button type="submit">Edit</button>

          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>


        </div>
    )
}

export default EditCampus;
