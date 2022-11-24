import React from 'react';

class LanguageButton extends React.Component {
    state = {  } 
    render() { 
        return (
            <button id='language' onClick={this.props.onclick}>{this.props.text}</button>
        );
    }
}
 
export default LanguageButton;