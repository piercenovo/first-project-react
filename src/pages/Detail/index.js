import React, { useContext } from 'react'
import GifsContext from '../../context/GifsContext'
import Gif from '../../components/Gif'


export default function Detail({ params }) {
    // const staticContext =  useContext(StaticContext)
    const {gifs} = useContext(GifsContext)

    const gif = gifs.find(singleGif => singleGif.id == params.id)
     

    // console.log(params.id)
    // return <h1>GIF con id {params.id}</h1>

    return <Gif {...gif} />

}