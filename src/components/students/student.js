import React from "react"
import { NavLink } from "react-router-dom"

function Student(props){

    return (
        <div>
            <h1>{props.data.firstName} {props.data.lastName}</h1>
            <p>{props.data.email}</p>
            <NavLink to={`/students/${props.data.id}`} key={props.data.id} >
                <img src={props.data.imageUrl}/>
            </NavLink>    
        </div>
    )
}

export default Student