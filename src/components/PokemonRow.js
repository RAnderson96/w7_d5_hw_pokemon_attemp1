import React from "react"

const PokemonRow = ( {position, pokemonName, pokemonImage}) => {

    const altTag = `Picture of ${pokemonName}`
    return (
        <div>
                <div>
                    {position}. {pokemonName}
                </div>
                <div>
                    <img src={pokemonImage} alt={altTag}></img>
                </div>
        </div>
    )
}


export default PokemonRow;