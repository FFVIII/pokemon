import React from 'react'

function PokemonThumnail({id, name, image, type}) {

  return (
    <div>
       <small>#{id}</small>
       <img src={image} alt={name} /> 
       <div>
            <h3>{name}</h3>
            <small>Type: {type}</small>
       </div>
    </div>
  )
}

export default PokemonThumnail