import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";

function AppRoot({ routes }) {


    

    return (<div>
        {
            routes &&
            routes.filter((item) => item.isDirectory)
                .routes.map(route => <Link to={route.name}>{route.name}</Link>)
        }</div>)
}
export default AppRoot;