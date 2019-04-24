import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";

function render() {
	ReactDOM.render(
		<App />,
		document.getElementById("root")
	);
}

render();