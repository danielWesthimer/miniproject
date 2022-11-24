import React from 'react';


class Generation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes)
                this.setState({ allMemeImgs: memes })
            })
    }
    handleChange(event) {
        const {name , value}=event.target
        console.log(event.target.name);
        this.setState({ [name]: event.target.value })
    }
    handleSubmit(e){
        e.preventDefault()
        console.log("gg");
        this.setState({randomImg:this.state.allMemeImgs[Math.floor(Math.random()*this.state.allMemeImgs.length)].url})
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name='topText'
                        // value={this.state.topText}
                        onChange={this.handleChange}/>
                    

                    <input
                        type="text"
                        name='bottomText'
                        // value={this.state.bottomText} 
                        onChange={this.handleChange}/>

                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>

        );
    }
}

export default Generation;
