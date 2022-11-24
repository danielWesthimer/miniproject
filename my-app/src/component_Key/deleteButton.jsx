import React from 'react';

class DeleteButton extends React.Component {
    state = {  } 
    render() { 
        return (
            <button id='delete' onClick={this.props.onclick}>Delete</button> 
        );
    }
}
 
export default DeleteButton;