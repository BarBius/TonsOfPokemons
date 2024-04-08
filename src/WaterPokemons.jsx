import React, { useState, useEffect } from 'react';

const WaterPokemons = () => {
const [waterPokemons, setWaterPokemons] = useState([]);

useEffect(() => {
fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Eau")
    .then(response => response.json())
    .then(data => setWaterPokemons(data))
    .catch(error => console.error("Error fetching Water Pokemon data:", error));
}, []);

return (
<div>
    <h2>Water Pokemons</h2>
    <ul>
    {waterPokemons.map((pokemon, index) => (
        <li key={index}>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>Name: {pokemon.name}</p>
        <p>Type: Water</p>
        </li>
    ))}
    </ul>
</div>
);
};

export default WaterPokemons;
