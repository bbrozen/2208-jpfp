import React from "react";
import { Routes, Route} from "react-router-dom";
import Students from "./components/students";
import Campuses from "./components/campuses";
import Navigation from "./components/navigation";

function App(){


    return(
            <div className = "App">
                
                <Navigation/>
                <Routes>
                    <Route index element={<Students/>} />
                    <Route path={"students"} element={<Students/>} />
                    <Route path={"campuses"} element={<Campuses/>}/>
                </Routes>

            </div>
    );
}

export default App;