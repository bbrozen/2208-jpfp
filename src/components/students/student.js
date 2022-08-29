import React from "react"

function Student(props){
    return (
        <div>
            <h1>{props.data.name}</h1>
            <p>Type: {props.data.type}</p>
        </div>
    )
}

export default Student