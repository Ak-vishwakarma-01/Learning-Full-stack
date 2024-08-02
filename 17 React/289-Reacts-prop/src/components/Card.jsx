import React from "react";
import Avatar from "./Avatar";

// const col = "red"
export default function Card(props) {
  return (
    <div className="card">
      <div className="top">
      <p style={{ color: "red",
                  marginTop:"0px"  }}>{props.id}</p>
        <h2>{props.name}</h2>
        <Avatar img={props.img}/>
      </div>
      <div className="bottom">
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
