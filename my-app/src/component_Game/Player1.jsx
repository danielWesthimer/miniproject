

import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: Math.floor(Math.random() * 100), counter: 0, endMoves: [] }
    }


    changeNumber(sign) {
        this.setState({ counter: this.state.counter + 1 })
        switch (sign) {
            case "+":
                this.setState({ number: this.state.number + 1 })
                break;
            case "-":
                this.setState({ number: this.state.number - 1 })
                break;
            case "*":
                this.setState({ number: this.state.number * 2 })
                break;
            case "/":
                this.setState({ number: this.state.number / 2 })
                break;
            default:

        }


    }

    render() {
        return (
            <div>
                {this.state.number === 100 && this.setState({ endMoves: [...this.state.endMoves, this.state.counter], number:0, counter: 0 })}
                <h1 id='name'>{this.props.name}</h1>
                {this.state.number!==0&&<div>
                    <button onClick={() => { this.changeNumber("+") }}>+</button>
                    <button onClick={() => { this.changeNumber("-") }}>-</button>
                    <button onClick={() => { this.changeNumber("*") }}>*</button>
                    <button onClick={() => { this.changeNumber("/") }}>/</button>
                </div>}
                <h1>{Math.floor(this.state.number)}</h1>
                <h2>moves:{this.state.counter}</h2>
                <h2>All moves of {this.props.name} is:  {this.state.endMoves.join()}</h2>
                {!this.state.number&&<button onClick={()=>this.setState({ number: Math.floor(Math.random() * 100)})} >new game</button>}
             
                <hr />
            </div>
        )
    }
}

export default Player;