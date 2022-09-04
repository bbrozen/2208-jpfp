import React, { useEffect } from "react";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCampus, selectSingleCampus } from "../../store/singleCampusSlice";
import { unregisterStudentAsync } from "../../store/campusReducer";
import EditCampus from "./EditCampus";

function CampusPage(){
   const params = useParams();
   const campusId = params.id;
   const singleCampus = useSelector(selectSingleCampus);

   const dispatch = useDispatch();

   let studentsList = [];
   singleCampus.students ? studentsList = singleCampus.students : studentsList = [];

   useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
   }, [dispatch]);

  const handleUnregister = async (evt, studentId) => {
    evt.preventDefault();
    const id = campusId;
    await dispatch(unregisterStudentAsync({id, studentId}))
  }; 

  return(
    <div>
            <h1>{singleCampus.name}</h1>
            <p>Address: {singleCampus.address}</p>
            <img src={singleCampus.imageUrl} alt='campus photo'/> 
            <ul>Students:
                {studentsList && studentsList.length ?
                        studentsList.map(itm =>
                            <NavLink to={`/students/${itm.id}`} key ={itm.id}>
                                <li>{itm.firstName} {itm.lastName}</li>
                                <div className = "button">
                                  <button onClick={(e) => handleUnregister(e, itm.id)}>Unregister</button>
                                </div>  
                            </NavLink> 
                        )
                :<li>Sorry, no students yet!</li>
                }

            </ul>
            <EditCampus/>
    </div>
  )
}

export default CampusPage