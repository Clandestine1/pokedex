import {render} from 'react-dom';
import React, {Component} from 'react';
import Pokemon from './Pokemon'
import axios from 'axios';

class PokeIndex extends Component{
  constructor(props){
    super(props);
    this.state = {
      species:[],
      statistics:[]
    };
  }
  componentWillMount(){ 
    axios.get('http://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => {
      this.setState({
        species: response.data.results
      }, () => {
      console.log(this.state)
      })
    });
    /*var urlAbil = 'http://pokeapi.co/api/v2/ability/?limit=151';
    axios.get(urlAbil)
    .then(response => {
      this.setState({
        statistics : response.data.results,
        rendered : true,
        imported : true
      }, () => {
        console.log(this.state)
        });
    });*/
    axios.get('http://pokeapi.co/api/v2/ability/?limit=151')
    .then(response => {
      this.setState({
        statistics: response.data.results
      }, () => {
      console.log(this.state)
      });
    });

  }

  

  render() {
    let content;
    {content = 
    <div>
          <div className="list">
            {this.state.species.map((p,i)=>
              <Pokemon 
                key={i} 
                id={i+1} 
                pokemon={p} 
                statistic={this.state.statistics[i]}
              />
            )}
          </div>  
    </div>
  }


    return (

      <div>
        {content}
    
      </div>
      )
  }
}  
export default PokeIndex;