import React from "react"

const TitleBar = ({handleClickChange}) => {

    return (
        <div>
            <h1>Your Pokemon</h1>
            <button type="button" onClick={handleClickChange}> See your Pokemon! </button>
        </div>
    )



} 

export default TitleBar;