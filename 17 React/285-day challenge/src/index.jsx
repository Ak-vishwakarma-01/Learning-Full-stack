/* 
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="lelo">Placeholder</h1>
  </div>,
  document.getElementById("root")
);

var time = new Date().getHours();
var greetingElement = document.querySelector(".lelo");

if (greetingElement) {
  if (time > 0 && time < 12) {
    greetingElement.innerHTML = "Good Morning";
    greetingElement.style.color = "red";
  } else if (time >= 12 && time < 18) {
    greetingElement.innerHTML = "Good Afternoon";
    greetingElement.style.color = "green";
  } else {
    greetingElement.innerHTML = "Good Night";
    greetingElement.style.color = "blue";
  }
}

*/



import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
