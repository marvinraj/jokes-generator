import { useState } from 'react'
import React from 'react'

function Joke() {

    const [joke, setJoke] = useState("click the damn button dawg")

    const fetchAPI = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => setJoke(data.setup + " ..... " + data.punchline))
        .catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <div className='joke-card'>
            <div className="container">
                <h2>{joke}</h2>
            </div>
            <button onClick={fetchAPI}>Generate</button>
        </div>
    )
}

export default Joke