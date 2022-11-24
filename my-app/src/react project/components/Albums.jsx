import { display } from "@mui/system";
import React from "react";
import { useState, useEffect } from 'react'
import { Link ,Outlet} from "react-router-dom";


let user = JSON.parse(localStorage.getItem("user"))
let userId 
user?userId = user.id:userId = 0

function Albums() {

    async function getAlbums() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        const dataJson = await res.json()
        setAlbums(dataJson)
    }
    const [albums, setAlbums] = useState([]);


    useEffect(() => {
        getAlbums();
        return () => { }
    }, []);

    console.log(albums)



    return (
        <div> <div >
            {albums.sort(
                (a, b) => a.title.localeCompare(b.title))
                .map(
                    (element, idx) =>  <Link  to={`${element.id}`}><div>{element.title}</div></Link>)}
           </div> 
           <Outlet/> 
        </div>);

}
    export default Albums;