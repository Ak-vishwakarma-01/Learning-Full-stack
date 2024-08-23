import React from "react";


export default function Form(props){
    return(
        <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {!props.isRegistered && <input type="password" placeholder="confirm password" />}
        <button type="submit"> 
            {props.isRegistered?"Login":"Registered"}
        </button>
      </form>
    );
}