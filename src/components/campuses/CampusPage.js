import React, { useEffect } from "react";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCampus, selectSingleCampus } from "../../store/singleCampusSlice";

function CampusPage(){
   const params = useParams();
   const campusId = params.id;
   const singleCampus = useSelector(selectSingleCampus);
   const students = singleCampus.students;


   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [dispatch]);

  console.log(students);
  return(
    <div>
            <h1>{singleCampus.name}</h1>
            <p>Address: {singleCampus.address}</p>
            <img src={singleCampus.imageUrl} alt='campus photo'/> 
            <ul>Students:
                {students && students.length ?
                        students.map(itm =>
                            <NavLink to={`/students/${itm.id}`} key ={itm.id}>
                                <li>{itm.firstName} {itm.lastName}</li>
                            </NavLink> 
                        )
                :<li>Sorry, no students yet!</li>
                }
            </ul>
    </div>
  )
}

export default CampusPage