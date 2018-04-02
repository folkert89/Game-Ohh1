import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './containers/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">0hh1</h1>
        </header>
        <p className="App-intro">
          To get started, click here for the rules
        </p>
        <Board />
      </div>
    );
  }
}

export default App;
