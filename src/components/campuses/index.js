import React from "react";
import Campus from "./campus";
import { useSelector } from "react-redux";

function Campuses(){

    const campuses = useSelector(state=> state.campuses.data)

    return (
        <>
            {campuses.map(itm => 
                <Campus key={itm.id} data={itm}/>
            )}
        </>
    )
}

export default Campuses