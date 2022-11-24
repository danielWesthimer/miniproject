import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter,Link, Route, Routes } from "react-router-dom";

function Folders(){
    const [data,useData]=useState([])
    const [click,useClick]=useState(0)
    async function GetUsers(url) {
        const res = await fetch(url)
          const dataJson = await res.json()
         useData(dataJson)
        
    }
    useEffect(()=>{
        GetUsers('http://localhost:8000')
    },[])

    // useEffect(()=>{
        
    // },[data])

    console.log(data);
    return(<div>
        <div> {data.map((data,idx)=><Link to="">{data}</Link>)}</div>
       
   </div> )
}
export default AppReact;