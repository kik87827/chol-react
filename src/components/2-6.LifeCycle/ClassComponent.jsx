import React, { Component } from 'react';

export default class ClassComponents extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerId = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  tick() {
    //console.log('tick');
    this.setState({ date: new Date() });
  }

  handleClick = () => {
    alert(this.state.date);
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
