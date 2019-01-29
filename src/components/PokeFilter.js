import React from 'react';

function PokeFilter(props){
  return (
    <input type="text" placeholder="enter pokemon name" onChange={(e) => props.filterInput(e)} />
  )
}

export default PokeFilter;