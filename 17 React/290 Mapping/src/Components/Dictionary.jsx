import React from "react";

export default function Dictionary(props){
    return(
        <div className="DictBox">
            {props.id}
            <div className="emoji">{props.emoji}</div>
            <div className="name">{props.name}</div>
            <div className="meaning">{props.meaning}</div>
        </div>
    );
}