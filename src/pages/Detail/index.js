import React from 'react'
import Gif from '../../components/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function Detail({ params }) {
    // const staticContext =  useContext(StaticContext)
    const gifs = useGlobalGifs()

    const gif = gifs.find(singleGif => singleGif.id == params.id)
     

    // console.log(params.id)
    // return <h1>GIF con id {params.id}</h1>

    return <Gif {...gif} />

}