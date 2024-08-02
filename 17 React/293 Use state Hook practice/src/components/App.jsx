import React, { useState } from "react";


export default function App(props) {
    const [Change ,newchange] = useState(props.currenttime);

    function badalde(){
        newchange(new Date().toLocaleTimeString())
    }

    const col = {"background-color": "rgb(17, 163, 134)",
                "color" : "white"
    }
  return (
    <div className="container">
      <h1 style={{color:"white"}}>{Change}</h1>
      <button onClick={badalde} style={col}>Change Time</button>
    </div>
  );
}

