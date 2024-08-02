
import React from "react";
import ReactDOM from "react-dom";

var fname = "Ankit";
var lname = "Kumar";



var year = new Date().getFullYear();
const customeColor={
  color: "red",
  fontSize: "40px",
  backgroundColor: "yellow"
};

customeColor.backgroundColor = "grey"

ReactDOM.render(
    <div style={customeColor}>
      <h1>Created Bu {fname + " " + lname} </h1>
      <h1>copyright {year} </h1>
      And my lucky nu is {345 + 234}
    </div>,
    document.getElementById("root")
  );