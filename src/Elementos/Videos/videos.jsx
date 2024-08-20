import './video.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import DatosSesion from '../Formulario/DatosSesion';

const Videos = () => {
    const { userId } = DatosSesion();
    const [videos, setVideos] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [favorites, setFavorites] = useState([]); // Estado para almacenar los favoritos
    const enlacessRefs = useRef([]);
    const [controlsVisible, setControlsVisible] = useState(false); // Estado para controlar la visibilidad de los controles
    const playerRef = useRef(null); // Referencia para el ReactPlayer


    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/videos/cinehub');
                if (!response.ok) {
                    throw new Error('Error al obtener los videos');
                }
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchVideos();
    }, []);

    const handlePlayPause = () => {
        setPlaying((prevState) => !prevState);
    };

    const handleToggleFavorite = async (videoId) => {
        try {
            const isFavorited = favorites.includes(videoId);
            if (isFavorited) {
                // Si ya está en favoritos, eliminarlo
                const response = await fetch(`http://localhost:5000/api/favorites/${userId}/${videoId}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error al quitar de favoritos');
                }

                // Actualizar el estado para quitar el video de favoritos
                setFavorites(prevFavorites => prevFavorites.filter(id => id !== videoId));
            } else {
                // Si no está en favoritos, agregarlo
                const response = await fetch('http://localhost:5000/api/favorites', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userId,
                        videoId: videoId,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error al agregar a favoritos');
                }

                // Agregar el video a favoritos en el estado
                setFavorites(prevFavorites => [...prevFavorites, videoId]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddToPlaylist = async (video) => {
        try {
            const response = await fetch('http://localhost:5000/api/lista-reproduccion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId, // Asegúrate de que userId esté disponible
                    videoId: video.id,
                }),
            });

            if (!response.ok) {
                throw new Error('Error al agregar a la lista de reproducción');
            }

            console.log(`Video añadido a la lista de reproducción: ${video.titulo}`);
        } catch (error) {
            console.error(error);
        }
    };

    const scrollLeft = (index, e) => {
        e.stopPropagation(); // Detener la propagación del evento
        enlacessRefs.current[index].scrollLeft -= 320;
        enlacessRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
        });
    };

    const scrollRight = (index, e) => {
        e.stopPropagation(); // Detener la propagación del evento
        enlacessRefs.current[index].scrollLeft += 320;
        enlacessRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            inline: 'end',
        });
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedVideo(null);
        setControlsVisible(false); // Reiniciar la visibilidad de los controles al cerrar el modal
    };
    const handleFullscreen = () => {
        const playerContainer = playerRef.current.wrapper; // Obtener el contenedor del ReactPlayer
        if (playerContainer) {
            // Activar el modo de pantalla completa
            playerContainer.requestFullscreen().catch(err => {
                console.error("Error al intentar activar pantalla completa:", err);
            });
            setControlsVisible(true); // Activar los controles al entrar en pantalla completa
        }
    };
    const handleOpenModal = (video) => {
        setSelectedVideo(video);
        setModalVisible(true);
        setControlsVisible(false); // Inicialmente, los controles están ocultos
    };

    return (
        <div className="videos">
            {/* Video destacado */}
            <div className='videoNuevo'>
                <ReactPlayer
                    url='https://dl.dropbox.com/s/jvf9xa88d5mspki/Depredador%20la%20presa%20%282022%29.mkv'
                    controls={true}
                    width='100%'
                    height='100%'
                    playing={playing}
                    playsInline={true}
                />
                <button className='btn_ver' onClick={handlePlayPause}>{playing ? 'Pausar' : 'Ver Ahora'}</button>
                <h2>Depredador La Presa</h2>
            </div>

            {/* Sección de videos en fila*/}
            {videos.reduce((acc, video, index) => {
                if (index % 10 === 0) {
                    acc.push([]);
                }
                acc[acc.length - 1].push(video);
                return acc;
            }, []).map((videoRow, index) => (
                <div className='videoFila' key={index}>
                    <h3 className='tipo'>{`Fila ${index + 1}`}</h3>
                    <div className='videoContainer'>
                        <button className="btn-scrol scroll-left" onClick={(e) => scrollLeft(index, e)}>
                            <FaChevronLeft />
                        </button>
                        <div className='subFila' ref={(el) => (enlacessRefs.current[index] = el)}>
                            {videoRow.map((video, videoIndex) => (
                                <div className='sub_box' key={videoIndex} onClick={() => {
                                    setSelectedVideo(video);
                                    setModalVisible(true);
                                }}>
                                    <div className='datosVideo' onClick={() => handleOpenModal(video)}>
                                        <p>{video.titulo}</p>
                                        <img src={video.url_imagen} alt="" />
                                        <button onClick={(e) => {
                                            e.stopPropagation(); // Evitar que el clic en el botón cierre el modal
                                            handleToggleFavorite(video.id);
                                        }}>
                                            <FaHeart className={`favorite-icon ${favorites.includes(video.id) ? 'active' : ''}`} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn-scrol scroll-right" onClick={(e) => scrollRight(index, e)}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            ))}

            {modalVisible && selectedVideo && (
                <div className="modal_video">
                    <div className="modal_content">
                        <FaTimesCircle className="close_btn" onClick={handleCloseModal} />
                        <ReactPlayer ref={playerRef} url={selectedVideo.url_video} controls={controlsVisible} playing={true} width="100%" height="100%" />
                        <div className="modal_buttons">
                            <button onClick={() => { handleAddToPlaylist(selectedVideo); handleFullscreen(); }} style={{width: '130px'}}>Ver Video</button>
                            <p> <FaHeart onClick={() => handleToggleFavorite(selectedVideo)} className={`favorite-icon ${favorites.includes(selectedVideo.id) ? 'active' : ''}`} />Favorito</p>
                        </div>
                        <h2>{selectedVideo.titulo}</h2>
                        <p className='descripcion'>{selectedVideo.descripcion}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Videos;
