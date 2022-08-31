import React from "react";
import { useSelector } from "react-redux";
import Student from "./student";
import { selectStudents } from "../../store/studentReducer";

function AllStudents(){

    const students = useSelector(selectStudents)
    
    return (
        <div>
            {students && students.length ?
            students.map(itm => 
                <Student key={itm.id} data ={itm}/>
                
            )
            :null
        }
        </div>

    )

}

export default AllStudents