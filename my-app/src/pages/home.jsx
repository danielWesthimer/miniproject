import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
 let changer = false

function Home() {
    const navigate = useNavigate()

    function change(changer) {
        
        if(changer=='clocks'){
            navigate('clocks')
        }
        else if(changer=='content'){
            navigate('content')          
        }
        else{navigate('game') }
    }
    function creating() {
        
    }
    return (
        <div id='hedder'>
            <h1>I'M HEDDER</h1>
            <div id='side'>side<div/>
            
           <button onClick={()=>change("clocks")}>Clock</button><br/>
           <button onClick={()=>change('content')}>content</button><br/>
           <button onClick={()=>change('game')}>game</button><br/>
        </div>
            <Outlet/>
        </div>);
}

export default Home;