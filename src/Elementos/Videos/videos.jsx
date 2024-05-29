import React from 'react';
import videoData from './data.js'
import ReactPlayer from 'react-player';
import './video.css'

const Videos = () => {
    return (
        <div className="videos">
            {videoData.map((video) => (
                <div className='datosVideo'>
                    <h3>{video.nombre}</h3>
                    <p>{video.descripcion} </p>
                    <ReactPlayer url={video.url} className="verVideo" />
                </div>
            ))}
        </div>
    );
};

export default Videos;