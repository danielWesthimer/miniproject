import React from 'react';

class UpperCase extends React.Component {
    state = {  } 
    render() { 
        console.log(this.props.upperCaseText);
        return (
            <button id='upperCase' onClick={this.props.onclick}>{this.props.upperCaseText}</button>
        );
    }
}
 
export default UpperCase;