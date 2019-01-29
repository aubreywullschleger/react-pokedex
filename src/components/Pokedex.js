import React from 'react';

import PokeFilter from './PokeFilter';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonArray: [],
      filteredArray: [],
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=30&offset=30')
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({pokemonArray: res.results, filteredArray: res.results});
        console.log(res.results)
      })
  }

  filterInput = (e) => {
    console.log(e.target.value);
    let arr = this.state.pokemonArray.filter((pokemon) => {
      return pokemon.name.includes(e.target.value)
    });
    this.setState({filteredArray: arr});
  }

  render() {
    return (
      <div>
        <PokeFilter filterInput={this.filterInput} />
        <Pokemon pokemonArray={this.state.filteredArray}/>
      </div>
    )
  }
}

export default Pokedex;