import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state ={
      inputText: ''
    }
  }

  handleChange(input){
    this.setState({
      inputText: input
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={(event)=> this.handleChange(event.target.value)} type="text"/>
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
