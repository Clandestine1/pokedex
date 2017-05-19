import {render} from 'react-dom';
import React, {Component} from 'react';
import Pokemon from './components/Pokemon'
import PokeIndex from './components/PokeIndex'


class Pokedex extends Component{
  render(){
    return (
    <div className="pokedex">
      <h1> The Kanto PokeDex! </h1>

          <PokeIndex />
    </div>
    )
  }
}

export default Pokedex;