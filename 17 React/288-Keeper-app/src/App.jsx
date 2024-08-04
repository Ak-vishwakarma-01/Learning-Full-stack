import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddNote from "./components/addNote"; 
export default function App(){
    return (
    <div>
        <Header/>
        <AddNote/>
        <Footer/> 
    </div>
    
    );
}
