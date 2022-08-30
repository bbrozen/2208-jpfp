import React from "react";
import { useSelector } from "react-redux";
import Student from "./student";

function Students(){

    const students = useSelector(state=> state.students.data)
    
    return (
        <>
            {students.map(itm => 
                <Student key={itm.id} data ={itm}/>
            )}
        </>

    )

}

export default Students