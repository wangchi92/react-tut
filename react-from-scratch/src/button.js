import React from "react";

export default class Button extends React.Component {
    render() {
        return (
            <button onClick={() => alert("kaboom!")}>
                Don't Click.
            </button>
        );
    }
}