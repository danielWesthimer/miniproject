import React from 'react'
import { useState } from 'react';
function Info() {

    
    let  user= JSON.parse(localStorage.getItem("user"))
    
   
console.log(user);
  
   console.log(user);
    return ( <div>
        <h1>Information:</h1>
        <h2>Name:{user.name}</h2>
        <h2>City:{user.address.city}</h2>
        <h2>Email:{user.email}</h2>
        <h2>phone:{user.phone}</h2>
    </div> );
}

export default Info;