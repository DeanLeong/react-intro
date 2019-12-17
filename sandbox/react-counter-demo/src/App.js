import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }

  increaseCount = () => {
    let count = this.state.count + 1;
    // .setState is how you update state
    // when state is updated...the Component re-renders
    this.setState({
      count: count
    });
  };

  decreaseCount = () => {
    let count = this.state.count - 1;
    this.setState({
      count: count
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    );
  }
}

export default App;
