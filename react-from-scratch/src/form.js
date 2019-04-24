import React from "react";

export default class Form extends React.Component {
    // render() {
    //     return(
    //         <form>
    //             <label>
    //                 Name:
    //                 <input type="text" name="name" />
    //             </label>
    //             <input type="submit" value="Submit" />
    //         </form>
    //     );
    // }
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value.toUpperCase()
        });
    }

    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}