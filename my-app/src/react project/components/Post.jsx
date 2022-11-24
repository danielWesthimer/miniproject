import React from "react";
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

let user = JSON.parse(localStorage.getItem("user"))
let userId
 user?userId = user.id:userId = 0
console.log(userId)

function Post() {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [div, setDiv] = useState("");


    async function getComments(postId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        const dataJso = await res.json()
        setComments(dataJso)
        console.log("fet");
    }

    async function getPost() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        const dataJson = await res.json()
        setPost(dataJson)
        setDiv(true)
        console.log("fet");
    }
    const param = useParams()
    console.log(param);
    let param1 = param.postId
    useEffect(() => {
        getPost()

        return () => { }
    }, []);
    // useEffect(() => {
    //     getComments(param1)

    //     return () => { }
    // }, [param1]);



    console.log(post)
    console.log(comments)



    false && console.log("true");
    ;
    function muduluParam() {
        if (param1 % 10 != 0) { param1 = param1 % 10 }
        else { param1 = 10 }
    }
    muduluParam()

    console.log(comments);

    return (
        <div>
            {post.length != 0 && <h2>{post[param1 - 1].body}</h2>}
            <button onClick={() => getComments(param.postId)}>comments</button>
            <div>{comments.length != 0 && comments.map((element) => <p>{element.body}</p>)}</div>
        </div>
    );
}

export default Post;