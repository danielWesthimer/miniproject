import React from "react";
import { useState, useEffect } from 'react'
import { Link ,Outlet} from "react-router-dom";

let user = JSON.parse(localStorage.getItem("user"))
let userId
 user?userId = user.id:userId = 0


function Posts() {



    async function getPosts() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        const dataJson = await res.json()
        setPosts(dataJson)
    }
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        getPosts();
        return () => { }
    }, []);

    console.log(posts)



    return (
        <table>
            <tr>
                <th>post</th>
                <th>number</th>

            </tr> 
            {posts.map((element, idx) =><tr><td><Link to={`${posts[idx].id}`}><div>{element.title}</div></Link></td><td>{idx+1}</td></tr>)}
           <Outlet/>
           </table>);

}
    export default Posts;