import React from "react"

function Campus(props){
    return (
        <div>
            <h1>{props.data.name}</h1>
            <p>Location: {props.data.location}</p>
            <img src={props.data.imageUrl} alt='fordham'/> 
        </div>
    )
}

export default Campus