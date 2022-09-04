import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchStudentsAsync } from "../../store/studentReducer";

import { fetchSingleStudent } from "../../store/singleStudentSlice";
import { selectSingleStudent } from "../../store/singleStudentSlice";
import { editStudentAsync } from "../../store/studentReducer";
 
function EditStudent() {
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;
    const student = useSelector(selectSingleStudent)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        dispatch(fetchSingleStudent(id));
      }, [dispatch, firstName, lastName, email]);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await dispatch(editStudentAsync({ id, firstName, lastName, email }));
      };

    return (
        <div>
            <form id="student-form" onSubmit={handleSubmit}>
        <label htmlFor="studentFirstName">New First Name:</label>
        <input
          name="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="studentLastName">New Last Name:</label>
        <input
          name="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">New Email:</label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
export default EditStudent;