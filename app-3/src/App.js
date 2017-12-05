import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { element } from '../../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/prop-types';

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
        'cyadance'],
        filterString: ''
    }
}

handleChange( filter ) {
  this.setState({ filterString: filter })
}

render() {
  let filteredInput = this.state.array.filter( (element, index) => {
    return element.includes( this.state.filterString );
  }).map( (element, index) => {
    return <h2 key={ index }>{ element }</h2>
  })
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <input onChange={(event)=> this.handleChange(event.target.value)} type='text'/>
      { filteredInput }
    </div>
  );
}
}

export default App;
