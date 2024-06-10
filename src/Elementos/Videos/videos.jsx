
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import videoData from './data.js';
import './video.css';

const Videos = () => {
    const [playing, setPlaying] = useState(false);

    const handlePlayPause = () => {
        setPlaying((prevState) => !prevState);
    };

    return (
        <div className="videos">
            <div className='videoNuevo'>
                <ReactPlayer
                    url='https://www.dropbox.com/scl/fi/av2c4kisybn0a67s0wpoe/Kung-fu-panda-4-2024.mkv?rlkey=n6gt3rmulk3os3weavapy2xcj&e=1&st=4q7rwnr4'
                    controls={true}
                    width='100%' height='100%'
                    playing={playing}
                    playsInline={true}
                />
                <button onClick={handlePlayPause}>{playing ? 'Pausar' : 'Ver Ahora'}</button>
                <h2>Kung fu panda 4 (2024)</h2>
            </div>
            <div className='videoBox'>
                {videoData.map((video) => (
                    <div className='datosVideo'>
                        <h3>{video.nombre}</h3>
                        <p>{video.descripcion}</p>
                        <ReactPlayer
                            className='verVideo'
                            url={video.url}
                            controls={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videos;
