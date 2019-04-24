import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./app.css";
import Clock from "./clock.js";
import Button from "./button.js";
import Form from "./form.js";
import Select from "./select.js";

function returnString(str) {
	return str;
}

class App extends Component{
	render(){
		let message = "Hello World!";

		return(
			<div>
				<div className="App" id="app">
					<h1> {message} </h1>
				</div>
				<Clock />
				<Button />
				<Form />
				<Select />
			</div>
    	);
  	}
}

export default hot(module)(App);
