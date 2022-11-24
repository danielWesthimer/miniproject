import React from 'react';
import Clock from './component_Clock/clock';
import './index.css';

class AppClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clocks: [
                { id: 0, country: "Asia/Jerusalem", interval: 1000, zone: "he-IL" },
                { id: 1, country: "America/New_York", interval: 1000, zone: "en-US" },
                { id: 2, country: "Europe/London", interval: 1000, zone: "en-GB" }
            ]
        }
    }
    reset = (id) => this.setState((state) => {
        state.clocks[id].interval = 1000;
        return state;
    })
    resetAll = () => {
        for (let i = 0; i < this.state.clocks.length; i++) {
            this.reset(i)
        }
    }

    double = (id) => this.setState((state) => {
        state.clocks[id].interval *= 2;
        return state;
    })
    doubleAll = () => {
        for (let i = 0; i < this.state.clocks.length; i++) {
            this.double(i)
        }
    }

    randomizeAll = () => {
        this.setState(
            (state) => {
                for (let i = 0; i < state.clocks.length; i++) {
                    state.clocks[i].interval = Math.floor(Math.random() * 10000) + 1;
                }
                return state;
            }
        )
    }

    render() {
        return (
            <div>
                <h2>All clocks</h2>
                <button onClick={this.resetAll} >Reset All Interval</button>
                <button onClick={this.doubleAll}>Double All Interval</button>
                <button onClick={this.randomizeAll} >Randomize All Intervals</button><hr></hr><br></br>
                {this.state.clocks.map(
                    (c, val) =>
                        <Clock
                            reset={() => this.reset(c.id)}
                            double={() => this.double(c.id)}
                            key={c.id}
                            interval={c.interval}
                            country={c.country}
                            zone={c.zone} />
                )}
            </div >
        )
    }
}
export default AppClock;
