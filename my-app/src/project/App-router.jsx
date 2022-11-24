
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppReact from './AppReact';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppReact />} />
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


