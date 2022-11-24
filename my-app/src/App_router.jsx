import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Hedder from './pages/hedder';
import getInvoices from './pages/content';
import Side from './pages/sidebar';
import Content2 from './pages/content2';
import App_clock from './App_clock'
import AppGeneration from './App_Generation'
import AppGame from './App_Game'

const invoices=getInvoices()

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                

                <Route path='/' element={<Home />} >

                <Route path='/' element={<h2>{invoices.map((invoice)=>`${invoice.fName} ${invoice.lName} `)}</h2> } />
                <Route path='content' element={<AppGeneration />} />
                <Route path='clocks' element={<App_clock/>} />
                <Route path='game' element={<AppGame/>} />
                   
                </Route >

                <Route path='*' element={<h2>Error</h2>} />
            </Routes>
        </BrowserRouter>);
}

export default AppRouter;