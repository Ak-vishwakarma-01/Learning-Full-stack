import React from "react";
import { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AddNote() {

  const [onload, setOnload] = useState(true);

  function onloadClick(){
    setOnload(false);
  };
   function load(){
    if(onload){
      return(
        <div className="addnote onload">
      <input onClick={onloadClick} onChange={submitnote} className="title" name="title" placeholder="Title"/>
      </div>
    );
    }else{
      return(
        <div className="addnote">
          <input onChange={submitnote} className="title" name="title" placeholder="Title"/>
          <input onChange={submitnote} className="text" name ="content" placeholder="Take a note"/>
        <Zoom in={true}> 
          <Fab onClick={additem}><AddRoundedIcon/></Fab>
        </Zoom>
        </div>
      );
    }
   }

   const [add,setAdd] = useState({
    title : "" , 
    content: ""
   });

   const[items,setitems] = useState([]);

   function submitnote(event){
    const {name,value} = event.target;
    setAdd(prevalue=>{
      return{
        ...prevalue,
        [name] :value
      }
    })
   }

   function additem(){
    setitems(prevalue=>{
      return[...prevalue,add]
    });

    // it is used to clear the input fields
    // setAdd({
    //   title: "",
    //   content: ""
    // });
   }

   function deleteitem(index){
    setitems(previtem=>{
      return previtem.filter((items,ind)=>ind !==index);
    })
   }

  function dict(item,index){
    return(
      <div className="note">
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <button onClick={()=>
            deleteitem(index)
          }className="delete"><DeleteIcon/></button>
      </div>
    );
}
  return (
    <div>
      {load()}
      {items.map(dict)}
    </div>
  );
}
