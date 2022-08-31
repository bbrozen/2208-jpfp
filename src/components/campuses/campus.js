import React from "react"
import { NavLink } from "react-router-dom"

function Campus(props){
    return (
        <div>
            <h1>{props.data.name}</h1>
            <NavLink to={`/campuses/${props.data.id}`}>Link to single campus view</NavLink>
            <p>Address: {props.data.address}</p>
            <img src={props.data.imageUrl} alt='campus photo'/> 

        </div>
    )
}

export default Campus