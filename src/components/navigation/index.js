import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return (
        <nav>
            <Link to="/">Students</Link>
            <Link to="/campuses">Campuses</Link>
        </nav>
    )
}

export default Navigation