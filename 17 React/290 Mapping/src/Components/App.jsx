import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "./Emojipedia";
import lelo from "./practice";

function dict(props){
    return(
        <Dictionary
           id = {props.id}
           name = {props.name}
           emoji = {props.emoji}
           meaning = {props.meaning}
        />
    );
}

export default function App(){
    return(
        <div className="TopLevel">
            <div><h1><span>emojipedia</span></h1> </div>
            <div className="Main">
            {emojipedia.map(dict)}
            </div>
            {console.log(lelo)}
        </div>
    );
}