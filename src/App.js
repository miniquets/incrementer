import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";

class App extends Component {    
  constructor(props) {
  super(props)
  this.state = {
    currentValue: 1
  };
}

  getCurrentValue (event) {
    const value = parseInt(event.target.value);
        this.setState({
            currentValue: value
        });
  }

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <input type="text" onChange={(e) => this.getCurrentValue(e)} />
        <Counter currentValue={this.state.currentValue}/>
      </div>
    );
  }
}



export default App;