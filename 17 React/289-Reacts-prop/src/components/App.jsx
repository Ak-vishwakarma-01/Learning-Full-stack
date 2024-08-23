import React from "react";
import contacts from "./contacts";
import Card from "./Card";
import Avatar from "./Avatar";

function CreateCards(cont){
  return(
    <Card
      id = {cont.id}
      name={cont.name}
      img={cont.imgURL}
      phone={cont.phone}
      email={cont.email}
    />    
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* <Avatar imt="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.jpg"/> */}
      
      {contacts.map(CreateCards)}
      
      {/* <Card
      name={contacts[0].name}
      img = {contacts[0].imgURL}
      phone = {contacts[0].phone}
      email = {contacts[0].email}
      />
      <Card
      name={contacts[1].name}
      img = {contacts[1].imgURL}
      phone = {contacts[1].phone}
      email = {contacts[1].email}
      />
      <Card
      name={contacts[2].name}
      img = {contacts[2].imgURL}
      phone = {contacts[2].phone}
      email = {contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
