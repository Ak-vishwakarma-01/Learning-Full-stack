import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function Handlechange(event){
    const newval = event.target.value;
    const inputname = event.target.name;
    setContact((prevName)=>{
      return{
        ...prevName, //it takes all the elememt of prevName object[ fname,lname, and email] as it is .
        [inputname] : newval  // this will change only that element which is changing
        // and after completing this return the value .
      }
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={Handlechange} name="fName" placeholder="First Name" />
        <input onChange={Handlechange} name="lName" placeholder="Last Name" />
        <input onChange={Handlechange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
