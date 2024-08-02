import React from "react";
import ReactDOM from "react-dom"; 
import pie, { doublePie, TripplePie } from "./Math";
import Add,{Multiply,Subtract,Divide} from "./Calcualtor";

ReactDOM.render(
  <div>
    <ul>
    <li><h1>{pie}</h1></li>
    <li><h2>{doublePie()}, {TripplePie()}</h2></li>
    <li><h3>{Add(5,6)}</h3></li>
    <li><h4>{Multiply(34,556)}</h4></li>
    </ul>
  </div>,
  document.getElementById("root")
);
