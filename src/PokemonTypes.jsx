import React, { useState, useEffect } from 'react';
import './PokemonTypes.css'; 

const PokemonTypes = () => {
const [types, setTypes] = useState([]);

useEffect(() => {
fetch("https://pokebuildapi.fr/api/v1/types")
    .then(response => response.json())
    .then(data => setTypes(data))
    .catch(error => console.error("Error fetching data:", error));
}, []);

return (
<div>
    <h2>Types de Pokémons</h2>
    <ul className="pokemon-types">
    {types.map((type, index) => (
        <li key={index} className="pokemon-type">{type.name}</li>
    ))}
    </ul>
</div>
);
};

export default PokemonTypes;
