

import React from 'react';
import Player from './component_Game/Player1'
import Learn from './component_Game/Learn';
 import './index.css';



class AppGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = { moves: 0, myNames : [],nameOnclick:"stsrt" , x: true
 
  }
  }

  // counter(move) {
  //   this.setState({ moves: move })
  // }

   del = () => {
      this.setState({x : false})
      
    }

  render() {
    return (
      <div id='myDiv'>
        
    {  this.state.x && <Learn deth={this.del}/>}
       
        {/* <h1>go to 100!!!</h1>
        <hr/>
        <input id='input' type="text" placeholder='Enter name' />
        <button onClick={() => {this.setState({myNames:[...this.state.myNames,document.getElementById("input").value],nameOnclick:"add gamer"} ) ;document.getElementById("input").value="" }}>{this.state.nameOnclick}</button>
      <hr/>
      { this.state.myNames.map((item,idx)=><Player counter={this.counter} name={item} key={idx}/>)} */}
      </div>
    )
  }
}

export default AppGame;




