import {render} from 'react-dom';
import React, {Component} from 'react';
import axios from 'axios';


class Pokemon extends Component{
  render(){
    const {pokemon,id} = this.props;
    return <div className="pokemon--species">
            <div className="pokemon--species--container">
              <div className="pokemon--species--sprite">
                <img src={`./sprites/${id}.png`}/>
              </div>
              <div className="pokemon--species--name"> {pokemon.name} </div>
            </div>
          </div>;
    }
}

class PokemonList extends Component{
  constructor(props){
    super(props);
    this.state = {
      species : [],
      imported : false,
      rendered : false,
    };
  }
  componentWillMount(){
    this.setState({
      rendered : true
    });
    var url = 'http://pokeapi.co/api/v2/pokemon?limit=151';
    axios.get(url)
    .then(response => {
    	console.log(response.data.results)
      this.setState({
        species : response.data.results,
        rendered : true,
        imported : true
      }, () => {
      	console.log(this.state)
      });
    });
  }

  render(){
    const {imported, rendered, species} = this.state;
    let content ;
    if(imported){
      {content = <div className="pokemon--species--list">{species.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>};
    }else if(rendered && !imported){
        content = <p> rendered ...</p>;
    }
    else{
      content = <div/>;
    }
    return  <div>
      {content}
    </div>;
  }
}

class PokeApp extends Component{
  render(){
    return <div className="pokeapp">
      <h1> Boss Shauna PokeDex! </h1>
      <PokemonList/>
    </div>;
  }
}

render(<PokeApp/>,document.getElementById('root')
);
