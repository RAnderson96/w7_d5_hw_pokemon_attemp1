import React, { useEffect, useState } from "react";
import PokemonTeam from "../components/PokemonTeam";
// import TitleBar from "../components/TitleBar";


const PokedexContainer = ({ initialPokemonArray }) => {

    const [pokemonTeamVal, getPokemonTeamFromApi] = useState([]);


    useEffect(() => {
        getUrls();
        
    }, [])

    
    const getUrls = () => {
        let var1 = [];
        for (const row of initialPokemonArray) {
            fetch(row.url)
            .then(res => res.json())
            .then(pokemon => var1.push(pokemon))
            .catch(err => console.error);
        }
        getPokemonTeamFromApi(var1)
    }


    // const handleClickChange = (var1) => {
    //     getPokemonTeamFromApi(var1)
    // }
    // const initialPokemonNamesList = ["charmander", "pidgey", "pikachu", "abra", "butterfree"];

    return (
        <div>
            <PokemonTeam pokemonTeamVal={pokemonTeamVal}/>
        </div>
    )

}

export default PokedexContainer;