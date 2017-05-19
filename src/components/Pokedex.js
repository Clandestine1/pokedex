import {render} from 'react-dom';
import React, {Component} from 'react';
import PokeIndex from './PokeIndex'


class Pokedex extends Component{
  render(){
    return (
    <div className="pokedex">
      <h1> Boss Shauna - Pokemon Master </h1>

          <PokeIndex />
    </div>
    )
  }
}

export default Pokedex;