import {render} from 'react-dom';
import React, {Component} from 'react';

String.prototype.capital = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class Pokemon extends Component{
  render(){
    return ( 
      <div>
        <div>
            <div className="species">
                <div className="container">
                  <div className="sprite">
                  <img src={`../gifs/${this.props.id}.gif`} alt=""/>
                  </div>
                  <div className="spec">{this.props.pokemon.name.capital()}</div>
                  <div className="ab">{this.props.statistic.name.capital()}</div>
                </div>
                        </div>
                </div>
          </div>
          )
    }

}
export default Pokemon;