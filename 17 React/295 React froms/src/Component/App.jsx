import React, { useState } from "react";

// export function Another() {
//   const [name, setName] = useState(""); // State for name in Another component

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function click(event) {
//     document.querySelector(".helele-another").innerHTML = "Hello " + name;
//     event.preventDefault();   // Prevent the form from reloading the page
//   }

//   return (
//     <div className="container">
//       <form action="submit"> { /* or we can call onsubmit = "click" */} 
//         <h1 className="helele-another">Hello </h1>
//         <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
//         <button onClick={click}>Submit</button>
//       </form>
//     </div>
//   );
// }


function App() {
  const [name, setName] = useState(""); // State for name in App component
  document.querySelector(".helele").innerHTML = "Hello " + name;

  function handleChange(event) {
    setName(event.target.value);
  }
  
  function handleClick() {
  }

  return (
    <div>
      <div className="container">
        <h1 className="helele">Hello {name}</h1>
        <input onChange={handleChange} type="text" placeholder="What's your name?" />
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default App;

