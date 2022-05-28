import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + this.props.currentValue
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - this.props.currentValue
        });
    };

    render() {
        return (
            <div>
                <p> This is our current count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}
export default Counter;