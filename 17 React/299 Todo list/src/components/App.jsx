import React from "react";
import { useState } from "react";
import $ from "jquery";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handlechange(event) {
    var lele = event.target.value;
    setItem(lele);
  }
  // console.log(item);

  function additem(event) {
    $("ul").append(`<li>${item}</li>`);                             

    // const ul = document.querySelector("ul");
    // ul.innerHTML += `<li>${item}</li>`;

    //const ul = document.querySelector("ul");
    //const li = document.createElement("li");
    //li.textContent = item;
    //ul.appendChild(li);

    // setItems((prevItems) => {
    //   return [...prevItems, item];
    // });
    // setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlechange} type="text" />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {items.map((todoItem, index) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//     const [item, setItem] = useState("");
//     const [items, setItems] = useState([]);

//     function inputChange(event) {
//         var lele = event.target.value;
//         setItem(lele);
//     }

//     function handleChange() {
//         setItems((prevItems) => {
//             return [...prevItems, item];
//         });
//         setItem(""); // Clear the input field after adding the item
//     }

//     return (
//         <div className="container">
//             <div className="heading">
//                 <h1>To-Do List</h1>
//             </div>
//             <div className="form">
//                 <input onChange={inputChange} type="text" value={item} />
//                 <button onClick={handleChange}>
//                     <span>Add</span>
//                 </button>
//             </div>
//             <div>
//                 <ul>
//                     {items.map((todoItem, index) => (
//                         <li key={index}>{todoItem}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default App;
