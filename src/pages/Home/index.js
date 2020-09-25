import React from 'react'
import {Link} from 'wouter'

const GIFS = ["panda", "programador", "bobesponja", "muebles", "perros"]

export default function Home() {
    return (
        <>
        <h3>Disfruta los gifs</h3>

        <ul>
            {GIFS.map(enjoyGif => (
                <li key={enjoyGif}>
                    <Link to={`/search/${enjoyGif}`}>
                        Gifs de {enjoyGif}
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}