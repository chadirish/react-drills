import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Image myImage={'https://media.giphy.com/media/ch3ZnHcChtSOA/giphy.gif'}/>
      </div>
    );
  }
}

export default App;
