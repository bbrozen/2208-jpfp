import React from "react";
import { Routes, Route} from "react-router-dom";
import AllStudents from "./components/students";
import Campuses from "./components/campuses";
import Navigation from "./components/navigation";

function App(){


    return(
            <div className = "App">
                
                <Navigation/>
                <Routes>
                    <Route index element={<AllStudents/>} />
                    <Route path={"students"} element={<AllStudents/>} />
                    <Route path={"campuses"} element={<Campuses/>}/>
                    
                </Routes>

            </div>
    );
}

export default App;