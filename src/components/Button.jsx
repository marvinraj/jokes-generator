import React from 'react'

function Button() {
    function handleClick(){
        console.log("button clicked...")
    }

    return (
        <button onClick={handleClick}>Generate Joke</button>
    )
}

export default Button