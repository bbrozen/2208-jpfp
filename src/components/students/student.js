import React from "react"
import { NavLink } from "react-router-dom"
import {deleteStudentAsync} from "../../store/studentReducer"
import {fetchSingleStudent} from "../../store/singleStudentSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"


function Student(props){
    const dispatch = useDispatch();
    const id = props.data.id;

    useEffect(() => {
        dispatch(fetchSingleStudent(id));
      }, [dispatch, id]);

    const handleDelete = async () => {
        await dispatch(deleteStudentAsync(id));
    };  

    return (
        <div>
            <h1>{props.data.firstName} {props.data.lastName}</h1>
            <NavLink to={`/students/${props.data.id}`}>Link to single student view</NavLink>  
            <p>{props.data.email}</p>
            <img src={props.data.imageUrl}/>
              

            <div className="delete-button">
                <button onClick={handleDelete}>X</button>
            </div>
        </div>
    )
}

export default Student