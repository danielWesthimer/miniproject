import React from 'react';

class BackButton extends React.Component {
    state = {  } 
    render() { 
        return (
            <button id='back' onClick={this.props.onclick}>back</button>
        );
    }
}
 
export default BackButton;