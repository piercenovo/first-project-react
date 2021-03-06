import {useState, useEffect, useContext} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs ({keyword} = {keyword: null}){
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)
    // const [gifs, setGifs] = useState([])

    // recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'gif'
    
    useEffect(() => {
        setLoading(true)
        
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)

            })
    }, [keyword, setGifs])

    return {loading, gifs}
}
