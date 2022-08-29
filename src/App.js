import React from "react";
import { Routes, Link} from "react-router-dom";
import { Route } from "react-router-dom";
import Students from "./components/students";
import Campuses from "./components/campuses";

function App(){


    return(
            <div className = "App">
            
                <Routes>
                    <Route index element={<Students/>} />
                    <Route path={"students"} element={<Students/>} />
                    <Route path={"campuses"} element={<Campuses/>}/>
                </Routes>

                <Link to="/campuses">Test</Link>

            </div>
    );
}

export default App;