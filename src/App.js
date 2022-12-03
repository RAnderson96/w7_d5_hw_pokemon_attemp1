import './App.css';
import PokedexContainer from "./containers/PokedexContainer"
function App() {
  const initialPokemonArray = [
        {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/charmander"},
        {name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/pidgey"},
        {name: "pikachu", url:"https://pokeapi.co/api/v2/pokemon/pikachu"},
        {name: "abra", url: "https://pokeapi.co/api/v2/pokemon/abra" },
        {name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/butterfree"}
        ]


  return (
    <>
      <h1>Home</h1>
      <PokedexContainer initialPokemonArray={initialPokemonArray}/>
    </>
  );
}

export default App;
