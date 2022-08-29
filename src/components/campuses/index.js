import React from "react";
import Campus from "./campus";

function Campuses(){

    const list = [
        {
            id: 1,
            name: "Fordham",
            location: "The Bronx",
            imageUrl: 'https://cdn.britannica.com/54/117954-004-066215F5/Keating-Hall-Fordham-University-NY-Bronx.jpg?s=1500x700&q=85'
        }
    ]

    return (
        <>
            {list.map(itm => 
                <Campus key={itm.id} data={itm}/>
            )}
        </>
    )
}

export default Campuses