import React, { Component } from 'react';
import Pokedex from './components/Pokedex';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Pokedex />
        </div>
      </div>
    );
  }
}

export default App;
