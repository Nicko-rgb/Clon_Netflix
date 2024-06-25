import React from 'react'
import Navegador from '../../Navegador/Navegador'
import ReactPlayer from 'react-player'
import '../Anime/anime.css'
import dataComedia from './dataComedia'

const Comedia = () => {
    return (
        <div className='anime'>
            <Navegador />
            <div className="container-pelis">
                <h2>PELIS COMEDIA</h2>
                <div className="box-pelis">
                    {dataComedia.map(video => (
                        <div className="box">
                            <h4>{video.nombre} </h4>
                            <p>{video.descripcion} </p>
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

export default Comedia
