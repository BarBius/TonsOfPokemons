import React, { useState, useEffect } from 'react';
import './PokemonList.css'; 

const PokemonList = () => {
const [pokemons, setPokemons] = useState([]);

useEffect(() => {
fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    .then(response => response.json())
    .then(data => setPokemons(data))
    .catch(error => console.error("Error fetching data:", error));
}, []);

return (
<div>
    <h2>100 Premiers Pokémons</h2>
    <ul className="pokemon-list">
    {pokemons.map(pokemon => (
        <li key={pokemon.id} className="pokemon-item">{pokemon.name}</li>
    ))}
    </ul>
</div>
);
};

export default PokemonList;
