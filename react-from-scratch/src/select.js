import React from "react";

export default class Select extends React.Component {
    // render() {
    //     return(
    //         <select>
    //             <option value="option1">Option1</option>
    //             <option value="option2">Option2</option>
    //             <option selected value="option3">Option3</option>
    //             <option value="option4">Option4</option>
    //         </select>
    //     );
    // }

    constructor(props) {
        super(props);
        this.state = {
            value: ['option4']
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: [ e.target.value ]
        })
    }

    render() {
        return(
            <label>
                <select multiple={true} value={this.state.value} onChange={this.handleChange}>
                    <option value="option1">Option1</option>
                    <option value="option2">Option2</option>
                    <option value="option3">Option3</option>
                    <option value="option4">Option4</option>
                </select>
            </label>
        );
    }
}