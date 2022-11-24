import React from 'react';

class KeyWord extends React.Component {
    state = {}
    render() {
        return (
            <button onClick={this.props.onclick1}>{this.props.item}</ button>
          
        );
    }
}

export default KeyWord;