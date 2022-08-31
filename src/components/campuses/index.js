import React from "react";
import Campus from "./campus";
import { useSelector } from "react-redux";
import {selectCampuses} from "../../store/campusReducer";

function Campuses(){

    const campuses = useSelector(selectCampuses)

    return (
        <div>
            {campuses && campuses.length ?
                campuses.map(itm => 
                    <Campus key={itm.id} data={itm}/>
                )
                :null
            }
        </div>
    )
}

export default Campuses