import React, {useEffect, useState } from 'react'
import {Link, useLocation} from 'wouter'
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

const GIFS = ["Pandas", "Perros", "Bob Esponja", "Muebles", "Gatos"]

export default function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        //Navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        //Hace el cambio
        setKeyword(evt.target.value)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Busca el gif aquí.." onChange={handleChange} type="text" value={keyword} />
        </form>
        <h3>Últimas búsquedas</h3>
        <ListOfGifs gifs={gifs} />
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