import React , {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    function change() {
        document.querySelector("h1").style.textDecoration = "line-through";
    }

    function nochange() {
        document.querySelector("h1").style.textDecoration = "none";
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Click here to increase the value</button>
            <button onClick={decrease}>Click here to decrease the value</button>
            <button onClick={change}>Click here to make line</button>
            <button onClick={nochange}>Click here to destroy line</button>
        </div>
    );
}