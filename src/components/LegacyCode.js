// import React, { useEffect, useState } from "react";
// import PokemonTeam from "../components/PokemonTeam";
// import TitleBar from "../components/TitleBar";


// const PokedexContainer = ({ initialPokemonArray }) => {

//     const [pokemonTeamVal, getPokemonTeamFromApi] = useState([]);
//     const [buttonClicked, setButtonClicked] = useState(false);


//     useEffect(() => {
//         getUrls();
//     }, [])

//     useEffect(() => {
//         getPokemonTeamFromApi(var1);
//     }, [buttonClicked])
//     // useEffect(()=>{
//     //     setPokemons(pokemonTeamVal)
        
//     // },[handleClickChange])

    
//     let var1 = [];

//     const getUrls = (var1) => {
//         for (const row of initialPokemonArray) {
//             fetch(row.url)
//             .then(res => res.json())
//             .then(pokemon => var1.push(pokemon))
//             .catch(err => console.error);
//         }
//         console.log(var1)
//     }


//     const handleClickChange = () => {
//         setButtonClicked(true);

//     }
//     // const initialPokemonNamesList = ["charmander", "pidgey", "pikachu", "abra", "butterfree"];

//     return (
//         <div>
//             <TitleBar handleClickChange={handleClickChange} />
//             <PokemonTeam pokemonTeamVal={pokemonTeamVal}/>
//         </div>
//     )

// }

// export default PokedexContainer;