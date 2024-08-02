import React from "react";



function Heading(){
const time = new Date().getHours();
let greeting;
let color;

if (time > 0 && time < 12) {
  greeting = "Good Morning";
  color = "red";
} else if (time >= 12 && time < 18) {
  greeting = "Good Afternoon";
  color = "green";
} else {
  greeting = "Good Night";
  color = "blue";
}
    return (
        <h1 style={{color}}>{greeting}</h1>
    );
}

export default Heading;