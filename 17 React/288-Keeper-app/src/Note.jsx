import React from "react";
import notes from "./notes";

function dict(props){
    return(
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}e</p>
    </div>);
}

export default function Note(){
    return(
        <div>
        {notes.map(dict)}
        </div>
    );
}