import React from "react"
import { NavLink } from "react-router-dom"
import { deleteCampusAsync } from "../../store/campusReducer"
import { useEffect } from "react"
import { fetchSingleCampus } from "../../store/singleCampusSlice"
import { useDispatch } from "react-redux"

function Campus(props){
    const dispatch = useDispatch();
    const id = props.data.id;

    useEffect(() => {
        dispatch(fetchSingleCampus(id));
      }, [dispatch, id]);

    const handleDelete = async () => {
        await dispatch(deleteCampusAsync(id));
    };  

    return (
        <div>
            <h1>{props.data.name}</h1>
            <NavLink to={`/campuses/${props.data.id}`}>Link to single campus view</NavLink>
            <p>Address: {props.data.address}</p>
            <img src={props.data.imageUrl} alt='campus photo'/> 

            <div className="delete-button">
                <button onClick={handleDelete}>X</button>
            </div>

    

        </div>
    )
}

export default Campus