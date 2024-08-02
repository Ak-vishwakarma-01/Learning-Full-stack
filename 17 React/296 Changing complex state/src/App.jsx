import React from "react";
import { useState } from "react";


export function Another1() {
  const [name, setName] = useState({
    fname: "",
    lname: ""
  });

  function handlechange(event){
    const newvalue = event.target.value;
    const inputNmae = event.target.name;

    setName((prevName)=>{
      if(inputNmae==="fname"){
        return{
          fname : newvalue,
          lname : prevName.lname
        }
      }else {
        return{
          fname: prevName.fname,
          lname: newvalue
        }
      }
    })  
  }

  return (
    <div className="container">
      <h1>Hello {name.fname} {name.lname}</h1>
      <input 
        onChange={handlechange} 
        name ="fname" 
        type="text" 
        placeholder="First Name" 
      />
      <input 
        onChange={handlechange} 
        name = "lname" 
        type="text" 
        placeholder="Last Name" 
      />
      <button>Submit</button>
    </div>
  );
}

export function Another() {
  const [name, setName] = useState({
    fname: "",
    lname: ""
  });

  function handleFirstChange(event) {
    setName((prevName) => {
      return {
      ...prevName,
      fname: event.target.value
      }
    });
  }

  function handleLastChange(event) {
    setName((prevName) => ({
      ...prevName,
      lname: event.target.value
    }));
  }

  return (
    <div className="container">
      <h1>Hello {name.fname} {name.lname}</h1>
      <input onChange={handleFirstChange} type="text" placeholder="First Name" value="" />
      <input onChange={handleLastChange} type="text" placeholder="Last Name" value=""/>
      <button>Submit</button>
    </div>
  );
}

function App() {
    const [Firstname, setfirstname] = useState("");
    const [lastnmae, setlastname]  = useState("");

    function first(event){
        setfirstname(event.target.value);
    }

    function last(event){
        setlastname(event.target.value);
    }

  return (
    <div>
      <div className="container">
        <h1>Hello {Firstname} {lastnmae}</h1>
        <input onChange={first} type="text" placeholder="First Name" />
        <input onChange = {last} type="text" placeholder="Last Name"/>
        <button >Submit</button>
      </div>
      <Another/>
      <Another1/>
    </div>
  );
}

export default App;
