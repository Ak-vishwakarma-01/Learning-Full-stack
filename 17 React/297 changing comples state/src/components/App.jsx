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
        if(inputname==="fName"){
            return{
                fName : newval,
                lName : prevName.lName,
                email : prevName.email
            }
        }else if(inputname==="lName"){
            return{
                fName : prevName.fName,
                lName : newval,
                email : prevName.email
            }
        }else{
            return{
                fName : prevName.fName,
                lName : prevName.lName,
                email : newval
            }
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
