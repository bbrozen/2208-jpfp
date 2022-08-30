import React from "react";
import { useSelector } from "react-redux";
import Student from "./student";

function AllStudents(){

    const students = useSelector(state=> state.students.data)
    
    return (
        <div>
            {students.map(itm => 
                <Student key={itm.id} data ={itm}/>
            )}
        </div>

    )

}

export default AllStudents