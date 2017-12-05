import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: [
        'chad',
        'chacie',
        'leia',
        'dylan',
        'chase',
        'cyadance']
    }
  }

  render() {
    let arrayToDisplay = this.state.array.map((element, index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {arrayToDisplay}

      </div>
    );
  }
}

export default App;
