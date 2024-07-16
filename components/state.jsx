import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {                 //counter - class, constructor-method,props-argument
    super(props);                   //parent cls properties
    // Initialize state
    this.state = {
      count: 0,
    };
  }
  //modify state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter
