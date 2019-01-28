import React from 'react';

import Pokeman from './Pokeman';

class Pokemon extends React.Component {
  constructor(props){
    super(props);
  }

  listPokemon () {
    return this.props.pokemonArray.map(pokemon => {
      return (
        <Pokeman value={pokemon} key={pokemon.name} />
      )
    })
  }


render () {
  return (
    <div>
      {this.listPokemon()}
    </div>
  )
}
}

export default Pokemon;