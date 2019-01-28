import React from 'react';

import PokeFilter from './PokeFilter';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonArray: [],
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=30&offset=30')
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({pokemonArray: res.results});
        console.log(res.results)
      })
  }

  render() {
    return (
      <div>
        <PokeFilter />
        <Pokemon pokemonArray={this.state.pokemonArray}/>
      </div>
    )
  }
}

export default Pokedex;