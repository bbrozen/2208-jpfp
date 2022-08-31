import React, { useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import AllStudents from "./components/students";
import Campuses from "./components/campuses";
import Navigation from "./components/navigation";
import CampusPage from "./components/campuses/CampusPage";
import StudentPage from "./components/students/StudentPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsAsync } from "./store/studentReducer";
import { fetchCampusesAsync } from "./store/campusReducer"

function App(){

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchStudentsAsync());
      dispatch(fetchCampusesAsync());
      
    }, [dispatch]);
  
    return(
            <div className = "App">
                
                <Navigation/>
                <Routes>
                    <Route index element={<AllStudents/>} />
                    <Route path={"students"} element={<AllStudents/>} />
                    <Route path={"campuses"} element={<Campuses/>}/>
                    <Route path={"campuses/:id"} element={<CampusPage/>} />
                    <Route path={"students/:id"} element={<StudentPage/>}/>
                </Routes>

            </div>
    );
}

export default App;