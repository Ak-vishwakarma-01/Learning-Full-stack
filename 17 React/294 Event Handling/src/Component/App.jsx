import React from "react";
import { useState } from "react";

function App() {
  const [hover, hoverupdate] = useState(false);
  
  function chadgya(){
    hoverupdate(true);
  }
  
  function utargya(){
    hoverupdate(false);
  }

  function over(){
    document.querySelector("button").style.backgroundColor = "red"
    document.querySelector("button").style.transform = "rotate(20deg)"
  }
  function down(){
    document.querySelector("button").style.backgroundColor = "yellow"
    document.querySelector("button").style.transform = "rotate(0deg)"
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={over} onMouseOut={down}>Submit</button>
      <button style={{backgroundColor:hover ? "brown":"yellow"}} 
      onMouseOver={chadgya} onMouseOut={utargya}>2ndSubmit</button>
    </div>
  );
}

export default App;
