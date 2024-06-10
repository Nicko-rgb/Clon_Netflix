import React from 'react'
import './anime.css'
import ReactPlayer from 'react-player';
import Navegador from '../../Navegador/Navegador'
import dataA from './dataA'

const Anime = () => {
    return (
        <div className='anime'>
            <Navegador />
            <div className="container-pelis">
                <h2>SECCION DE ANIME</h2>
                <div className="box-pelis">
                    {dataA.map(data => (
                        <div className='box'>
                            <h3>{data.nombre}</h3>
                            <p>{data.decripción} </p>
                            <ReactPlayer
                                className='verVideo'
                                url={data.url}
                                controls={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Anime
