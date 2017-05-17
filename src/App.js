import React, { Component } from 'react';
import Pokedex from './components/Pokedex'
import Pokemon from './components/Pokemon'
import PokeIndex from './components/PokeIndex'
import fetch from 'isomorphic-fetch';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Pokedex />
          <Pokemon />
          <PokeIndex />
        </div>
      </div>
    );
  }
}

export default App;
