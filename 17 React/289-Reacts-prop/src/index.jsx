import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://h478ff.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.


ReactDOM.render(
    <App/>
    ,document.getElementById("root")
)


// function Card(props){
//     return(
//         <div>
//         <h1>{props.name}</h1>
//         <h4>{props.img}</h4>
//         <h4>{props.age}</h4>
//         <h4>{props.from}</h4>
//         </div>
//     );
// }

// ReactDOM.render(
//     <div>
//         <Card
//         name="ankit" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//         age = "234"
//         from = "fdscvdsd"
//         />
//         <Card
//         name="ankit" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//         age = "234"
//         from = "fdscvdsd"
//         />
//         <Card
//         name="ankit" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//         age = "234"
//         from = "fdscvdsd"
//         />
//     </div>
//     ,document.getElementById("root")
// )
