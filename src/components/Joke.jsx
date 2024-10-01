import { useState } from 'react'
import React from 'react'

function Joke() {

    const [joke, setJoke] = useState("click the damn button dawg")

    const fetchAPI = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => setJoke(data.setup + " ..... " + data.punchline))
    }

    return (
        <div>
            <button onClick={fetchAPI}>Generate Joke</button>
            <h2>{joke}</h2>
        </div>
    )
}

export default Joke