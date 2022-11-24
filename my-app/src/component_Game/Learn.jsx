import React from 'react';


class Learn extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() };
  }


componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}

componentWillUnmount() {
  console.log("Unmount");

  
}

tick() {
  this.setState({
    date: new Date()
  });
  
}

render() {
  return (
    <div>
      <h2 onClick={this.props.deth}>It is {this.state.date.toLocaleTimeString()}</h2>
    </div>
  );
}
}

export default Learn;