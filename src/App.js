import './App.css';
import FirePokemons from './FirePokemons';
import Header from './Header';
import PlantPokemons from './PlantPokemons';
import Pok100List from './Pok100List'
import PokemonTypes from './PokemonTypes';
import WaterPokemons from './WaterPokemons';

function App() {
  return (
    <div className="App">
    <Header/>
    <Pok100List/>
    <PokemonTypes/>
    <WaterPokemons/>
    <PlantPokemons/>
    <FirePokemons/>
    </div>
  );
}

export default App;
