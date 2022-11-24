import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import { useState } from 'react';
import Home from './components/Home';
import Info from './components/Info';
import Todos from './components/Todos';
import Posts from './components/Posts';
import Post from './components/Post';
import Albums from './components/Albums';
import Photos from './components/Photos';



function AppUser() {

    const [data, useData] = useState("")

    async function GetUsers(url) {
        const res = await fetch(url)
        const dataJson = await res.json()
        useData(dataJson)
    }



    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login getUsers={GetUsers} data={data} />} />

                <Route path='/home' element={<Home />} >
                    <Route path='info' element={<Info />} />
                    <Route path='todos' element={<Todos />} />
                    <Route path='posts' element={<Posts />} >
                        <Route path=':postId' element={<Post />} />
                    </Route >
                    <Route path='albums' element={<Albums />} />
                    <Route path='albums/:photosId' element={<Photos />} />

                </Route >
            </Routes>

        </BrowserRouter>);
}

export default AppUser;