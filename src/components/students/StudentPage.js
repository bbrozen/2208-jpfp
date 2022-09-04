import React, { useEffect } from "react";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditStudent from "./EditStudent";
import {fetchSingleStudent, selectSingleStudent} from "../../store/singleStudentSlice";
import { fetchSingleCampus } from "../../store/singleCampusSlice";

function StudentPage(){
    const params = useParams();
    const studentId = params.id;
    const singleStudent = useSelector(selectSingleStudent);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSingleStudent(studentId));
      }, [dispatch, studentId]);
    
    return(
        <div>
                <h1>{singleStudent.firstName} {singleStudent.lastName}</h1>
                <p>email: {singleStudent.email}</p>
                <p>gpa: {singleStudent.gpa}</p>
                <img src={singleStudent.imageUrl} alt='student photo'/> 
                {singleStudent.campusId ? 
                <NavLink to={`/campuses/${singleStudent.campusId}`} key={singleStudent.campusId}>
                    <p>Link to campus</p>
                </NavLink>
                    :<p>No university listed"</p> }
                <EditStudent/>
        </div>
    )
}

export default StudentPage;