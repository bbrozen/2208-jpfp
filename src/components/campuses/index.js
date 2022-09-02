import React from "react";
import Campus from "./campus";
import { useSelector } from "react-redux";
import {selectCampuses} from "../../store/campusReducer";
import CreateCampus from "./CreateCampus";
import { useEffect } from "react";
import { fetchCampusesAsync } from "../../store/campusReducer";
import { useDispatch } from "react-redux";

function Campuses(){

    const campuses = useSelector(selectCampuses)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampusesAsync());
      }, [dispatch]);

    return (
        <div>
            {campuses && campuses.length ?
                campuses.map(itm => 
                    <Campus key={itm.id} data={itm}/>
                )
                :null
            }

            <div>
                <CreateCampus/>
            </div>    
        </div> 
    )
}

export default Campuses