
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AppReact from './AppReact';
import AppRoot from './AppRoot.jsx';
import AppReact2 from './AppReact2';

function AppRouter() {
    // --------------------------------------------------------------- //
    const [data, useData] = useState([])

    async function GetAll() {
        const res = await fetch("http://localhost:8000")
        const dataJson = await res.json()
        useData(dataJson)
    }
    useEffect(() => { GetAll() }, [])
    // --------------------------------------------------------------- //

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<AppReact />} /> */}
                {/* ---------------------------------------------------------------  */}
                {data.length > 0 && <Route path='/' element={<AppRoot routes={data} />} />}
                {data.length > 0 && data.filter((item) => item.isDirectory).map(item => <Route path={item.name} element={<AppReact2 />} />)}


                {/* ---------------------------------------------------------------  */}


                {/* <Route path='alboms' element={<Alboms />} >
                        <Route path=':postId' element={<Post />} />
                    </Route >
                
                <Route path='/rename' element={<AppReact />} />
                <Route path='/delete' element={<AppReact />} />
                <Route path='/up' element={<AppReact />} />
                <Route path='/enter' element={<AppReact />} /> */}
            </Routes>
        </BrowserRouter>);
}

export default AppRouter;


