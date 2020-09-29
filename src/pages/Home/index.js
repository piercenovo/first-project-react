import React, {useState} from 'react'
import {Link, useLocation} from 'wouter'
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'
import TrendingSearches from '../../components/TrendingSearches'

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
            <button>Buscar</button>
            <input placeholder="Busca el gif aquí.." onChange={handleChange} type="text" value={keyword} />
        </form>
        <div className="App-main">
            <div className="App-results">
                <h3 className="App-title">Últimas búsquedas</h3>
                <ListOfGifs gifs={gifs} />
            </div>
            <div className="App-category">
                <TrendingSearches />
            </div>
        </div>
        </>
    )
}