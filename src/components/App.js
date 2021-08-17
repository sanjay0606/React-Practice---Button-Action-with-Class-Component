import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			phidden:true,
		}
	};

    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={()=>this.setState({phidden:false})}>show para</button>

				{this.state.phidden ? null : <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    		</div>
    	);
    }
}


export default App;

