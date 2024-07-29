import React from 'react'
import '../Anime/anime.css'
import Navegador from '../../Navegador/Navegador'
import ReactPlayer from 'react-player'
import dataTerror from './dataTerror'

const Terror = () => {
    return (
        <div className='anime'>
            <Navegador />
            <div className="container-pelis">
                <h2>TERROR</h2>
                <div className="box-pelis">
                    {dataTerror.map(video => (
                        <div className="box">
                            <h4>{video.Nombre} </h4>
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

export default Terror
