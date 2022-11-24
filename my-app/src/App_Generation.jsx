import React from 'react';
import Generation from './component_Generation/Generation';
import Header from './component_Generation/Header';
import './generation.css';
import Life from './lifeCycle';

class AppGeneration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
        this.hendler=this.hendler.bind(this)
    }
    

    ref1

    creareRef = el =>  
    
    
    
    
    
    
    
    {
        this.ref1 = el

    }

    hendler() {
        this.ref1.focus()
    }

    render() {

        return (
            <div> 
                <input ref={this.creareRef}/>
                <button onClick={this.hendler}>click</button>;
            </div>)
    }

   
    
}

export default AppGeneration;
