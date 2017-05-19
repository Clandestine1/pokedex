import {render} from 'react-dom';
import React, {Component} from 'react';
import './App.css';

String.prototype.capital = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}



class Test extends Component{
  constructor(props){
    super(props);
    this.state = {
      statistics : []
    }
  }
  componentWillMount(){ 
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
    axios.get('http://pokeapi.co/api/v1/pokemon/?limit=151')
    .then(response => {
      this.setState({
        statistics : response.data.results
      }, () => {
     	console.log(this.state)
      })
    })
    /*axios.get('http://pokeapi.co/api/v1/pokemon/?limit=151')
    .then(response => {
      this.setState({
        statistics : response.data.types,
      }, () => {
      	console.log(this.state)
      	});
    });
    */
  }

  render() {
    const {statistics} = this.state;
    let content;
      {content = 
<div>
		<div className="pokemon--species--list2">{statistics.map((p,i)=><Pokemon key={i} id={i+1} pokemon={p}/>)}</div>
</div>
    }
    return (
    <div>
      {content}
    </div>
    )
}
}  



export default Test
