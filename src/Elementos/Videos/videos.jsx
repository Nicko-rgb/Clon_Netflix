import './video.css';
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import videoData from './data.js';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DatosSesion from '../Formulario/DatosSesion.js';

const Videos = () => {

    const { userName, userApellido } = DatosSesion()
    // Código para reproducir el video con el botón
    const [playing, setPlaying] = useState(false);

    const handlePlayPause = () => {
        setPlaying((prevState) => !prevState);
    };

    // Código para desplazar por los videos
    const enlacessRef1 = useRef(null);
    const enlacessRef2 = useRef(null);

    const scrollLeft = (ref) => {
        ref.current.scrollLeft -= 320;
        ref.current.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
        });
    };

    const scrollRight = (ref) => {
        ref.current.scrollLeft += 320;
        ref.current.scrollIntoView({
            behavior: 'smooth',
            inline: 'end',
        });
    };

    return (
        <div className="videos">
            {/* Video destacado */}
            <div className='videoNuevo'>
                <ReactPlayer
                    url='https://www.dropbox.com/scl/fi/av2c4kisybn0a67s0wpoe/Kung-fu-panda-4-2024.mkv?rlkey=n6gt3rmulk3os3weavapy2xcj&e=1&st=4q7rwnr4'
                    controls={true}
                    width='100%'
                    height='100%'
                    playing={playing}
                    playsInline={true}
                />
                <button onClick={handlePlayPause}>{playing ? 'Pausar' : 'Ver Ahora'}</button>
                <h2>Kung fu panda 4 (2024)</h2>
            </div>

            {/* Sección de videos */}
            <div className='videoFila'>
                <h3 className='tipo'>{userName} {userApellido} </h3>
                <div className='videoContainer'>
                    <button className="btn-scrol scroll-left" onClick={() => scrollLeft(enlacessRef1)}>
                        <FaChevronLeft />
                    </button>
                    <div className='subFila' ref={enlacessRef1}>
                        {videoData.map((video, index) => (
                            <div className='sub' key={index}>
                                <div className='datosVideo'>
                                    <h3>{video.nombre}</h3>
                                    <p>{video.descripcion}</p>
                                    <ReactPlayer
                                        className='vdo'
                                        url={video.url}
                                        controls={true}
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn-scrol scroll-right" onClick={() => scrollRight(enlacessRef1)}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            <div className='videoFila'>
                <h3 className='tipo'>ültimos 2024</h3>
                <div className='videoContainer'>
                    <button className="btn-scrol scroll-left" onClick={() => scrollLeft(enlacessRef2)}>
                        <FaChevronLeft />
                    </button>
                    <div className='subFila' ref={enlacessRef2}>
                        {videoData.map((video, index) => (
                            <div className='sub' key={index}>
                                <div className='datosVideo'>
                                    <h3>{video.nombre}</h3>
                                    <p>{video.descripcion}</p>
                                    <ReactPlayer
                                        className='vdo'
                                        url={video.url}
                                        controls={true}
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn-scrol scroll-right" onClick={() => scrollRight(enlacessRef2)}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Videos;