import React, { useState, useEffect } from 'react'
import Gif from '../Gif'
import './ListOfGifs.css'

export default function ListOfGifs({ gifs}) {

    return (
        <div className='ListOfGifs'>{
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />
            )
        }
        </div>
    )
};