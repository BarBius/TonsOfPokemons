import React, { useState, useEffect } from 'react';

const PlantPokemons = () => {
const [plantPokemons, setPlantPokemons] = useState([]);

useEffect(() => {
fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Plante")
    .then(response => response.json())
    .then(data => setPlantPokemons(data))
    .catch(error => console.error("Error fetching Plant Pokemon data:", error));
}, []);

return (
<div>
    <h2>Plant Pokemons</h2>
    <ul>
    {plantPokemons.map((pokemon, index) => (
        <li key={index}>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>Name: {pokemon.name}</p>
        <p>Type: Grass</p>
        </li>
    ))}
    </ul>
</div>
);
};

export default PlantPokemons;
