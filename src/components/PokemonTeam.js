import React from "react"
import PokemonRow from "./PokemonRow"


const PokemonTeam = ({ pokemonTeamVal }) => {
    console.log(pokemonTeamVal)


    return (
            <div>
                {pokemonTeamVal.map((pokemon, index) => {
                    return (
                        <PokemonRow
                            key={index}
                            position={index + 1}
                            pokemonName={pokemon.name}
                            pokemonImage={pokemon.sprites.front_default}
                        />
                    )
                })}
            </div>


    )

}

export default PokemonTeam;