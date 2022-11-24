import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
       
    }

    render() {
        return (
            <header>
            <img 
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?" />
                <p>Meme Generator</p>
        </header>
               
        );
    }
}

export default Header;
