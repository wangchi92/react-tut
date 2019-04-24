import React, { Component } from "react";
import "./clock.css";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div className="Clock">
                <h5>Time: {this.state.date.toLocaleTimeString()}</h5>
            </div>
        );
    }
}
