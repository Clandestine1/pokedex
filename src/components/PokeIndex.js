import {render} from 'react-dom';
import React, {Component} from 'react';

class PokemonIndex extends Component{
  constructor(props){
    super(props);
    this.state = {
      species : [],
      fetched : false,
      loading : false,
    };
  }
  componentWillMount(){
    this.setState({
      loading : true
    });
    var url = 'http://pokeapi.co/api/v2/pokemon?limit=151';
    axios.get(url)
    .then(response=>{
      this.setState({
        species : response.results,
        loading : true,
        fetched : true
      });
    });
  }

  render(){
    const {fetched, loading, species} = this.state;
    let content ;
    
    return  <div>
      {content}
    </div>;
  }
}

export default PokeIndex;