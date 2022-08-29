import React from "react";
import Student from "./student";

function Students(){

    const list = [
        {
            id: 1,
            name: "Brendan",
            type: "undergrad"
        }
    ]

    return (
        <>
            {list.map(itm => 
                <Student key={itm.id} data ={itm}/>
            )}
        </>

    )

}

export default Students