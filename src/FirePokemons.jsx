import React, { useState, useEffect } from 'react';

const FirePokemons = () => {
const [firePokemons, setFirePokemons] = useState([]);

useEffect(() => {
fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Feu")
    .then(response => response.json())
    .then(data => setFirePokemons(data))
    .catch(error => console.error("Error fetching Fire Pokemon data:", error));
}, []);

return (
<div>
    <h2>Fire Pokemons</h2>
    <ul>
    {firePokemons.map((pokemon, index) => (
        <li key={index}>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>Name: {pokemon.name}</p>
        <p>Type: Fire </p>
        </li>
    ))}
    </ul>
</div>
);
};

export default FirePokemons;
