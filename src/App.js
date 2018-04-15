import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './containers/Board'
import CreateGameButton from './components/CreateGameButton'
import Progress from './components/playerProgress'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">0hh1</h1>
        </header>
        <div className="Rules">
          <h3>Game Rules:</h3>
          <ul>
            <li>No more than 2 consecutive reds or blues in a row or column</li>
            <li>Equal numbers of red and blue in each row and column</li>
            <li>No 2 columns or rows may be the same</li>
            <li>The game is finished when all squares have a value 1 or 2 and all the other rules are met.</li>
          </ul>
        </div>
        <CreateGameButton />

        <Progress />

        <Board />
      </div>
    );
  }
}

export default App;
