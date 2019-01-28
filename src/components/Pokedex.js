import React from 'react';

class Pokedex extends React.Component {
  render() {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        console.log(JSON.stringify(res));
      })
    return (
      <div></div>
    )
  }
}

export default Pokedex;