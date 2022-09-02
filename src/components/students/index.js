import React from "react";
import { useSelector } from "react-redux";
import Student from "./student";
import { selectStudents, fetchStudentsAsync } from "../../store/studentReducer";
import CreateStudent from "./CreateStudent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function AllStudents(){

    const students = useSelector(selectStudents)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudentsAsync());
      }, [dispatch]);

    
    return (
        <div>
            {students && students.length ?
            students.map(itm => 
                <Student key={itm.id} data ={itm}/>
                
            )
            :null
        }
            <div>
                <CreateStudent/>
            </div>

        </div>

    )

}

export default AllStudents