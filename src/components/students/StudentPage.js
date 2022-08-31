import React, { useEffect } from "react";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {fetchSingleStudent, selectSingleStudent} from "../../store/singleStudentSlice";

function StudentPage(){
    const params = useParams();
    const studentId = params.id;
    const singleStudent = useSelector(selectSingleStudent);
    

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSingleStudent(studentId));
      }, [dispatch]);

      console.log(singleStudent);
    
    return(
        <div>
                <h1>{singleStudent.firstName} {singleStudent.lastName}</h1>
                <p>email: {singleStudent.email}</p>
                <p>gpa: {singleStudent.gpa}</p>
                <img src={singleStudent.imageUrl} alt='student photo'/> 
                {singleStudent.campusId ? 
                <NavLink to={`/campuses/${singleStudent.campus.id}`} key={singleStudent.campus.id}>
                    <p>{singleStudent.campus.name}</p>
                </NavLink>
                    :<p>No university listed"</p> }
                
        </div>
    )
}

export default StudentPage;