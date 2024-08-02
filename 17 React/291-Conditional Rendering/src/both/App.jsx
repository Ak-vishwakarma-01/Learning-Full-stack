import React from "react";
import Form from "./Form.jsx";

var isLoggedIn = false;

function App() {    
    return (
        <div className="container">
            <Form
            isRegistered = {isLoggedIn}
            />
        </div>
    );
}

export default App;