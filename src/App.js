import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
     
        <hi> This is the blank state we're working with</hi>
        <Counter />
      </div>
    );
  }
}



export default App;