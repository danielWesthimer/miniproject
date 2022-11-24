import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), UpdateInterval: this.props.interval };
  }

  updateSetInterval = () => {
    this.intervalID && clearInterval(this.intervalID)
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, this.state.UpdateInterval);
  }

  componentDidMount() { this.updateSetInterval() }

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.interval !== state.UpdateInterval) {
      return { UpdateInterval: nextProps.interval }
    }
    return null;
  }

  componentDidUpdate(prevProps, pState) {
    if (pState.UpdateInterval !== this.state.UpdateInterval) { this.updateSetInterval() }
  }
  

  render() {
    return (
      <div>
        <h1>
          {this.props.country +"  "+ this.state.date.toLocaleTimeString(this.props.zone, { timeZone: this.props.country })+"  | "+this.state.UpdateInterval}
        </h1> <br />
        <button onClick={this.props.reset}>Reset My Interval </button>
        <button onClick={this.props.double}>Double My Interval</button>
        <button onClick={ ()=>this.setState({ date: new Date() }) }> Update Me Now </button>
      </div>
    );
  }
}
export default Clock;


