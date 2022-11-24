import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Outlet, Link } from "react-router-dom";

function Home() {

    const [name, setName] = useState("")
    let user = JSON.parse(localStorage.getItem("user"))
 let navigate = useNavigate()

    useEffect(() => {
         if (!user) {
        navigate("/")
        return
    }
        setName(user.name)
        return () => { }
    }, [user]);

   
   

    return (
        <div >
            {<h1> Hello {name}</h1>}
            <div id={"link"}>
                <Link className="link" to={"info"} >info</Link>{"   "}
                <Link className="link" to={"todos"}>todos</Link>{"  "}
                <Link className="link" to={"posts"}>posts</Link>{"  "}
                <Link className="link" to={"albums"}>Albums</Link>{"  "}
                <Link className="link" to={"/"} onClick={() => localStorage.clear("user")}>logout</Link>{"  "}
            </div>

            <Outlet />
        </div>



    );
}

export default Home;