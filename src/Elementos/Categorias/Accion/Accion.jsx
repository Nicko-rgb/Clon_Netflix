import React from 'react'
import '../Anime/anime.css'
import Navegador from '../../Navegador/Navegador'
import ReactPlayer from 'react-player';
import dataAccion from './dataAccion'

const Accion = () => {
    return (
        <div className='anime'>
            <Navegador />
            <div className="container-pelis">
                <h1>ACCION PELICULAS</h1>
                <div className="box-pelis">
                    {dataAccion.map(video => (
                        <div className="box">
                            <h4>{video.nombre} </h4>
                            <p>{video.descrpcion} </p>
                            <ReactPlayer
                                className="verVideo"
                                url={video.url}
                                controls={true}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
        
    )
}

export default Accion
