import { useEffect, useState } from 'react';
import './App.css';
import PokemonThumnail from './components/PokemonThumnail';

function App() {

  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemon = async() => {
    const res = await fetch(loadMore)
    const data = await res.json()
    
    console.log(data)
    setLoadMore(data.next)

    function createPokemonObject(results){
      results.forEach(async(pokemon)=>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        
        setAllPokemons(currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }
 
  useEffect(() => {
    getAllPokemon()
  }, [])


  return (
    <div className="App">
        {/* render pokemons  */}
        {allPokemons.map((pokemon,index) => 
          <PokemonThumnail 
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
          />
        )}
    </div>
  );
}

export default App;
