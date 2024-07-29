import React, { useState, useEffect, useRef } from 'react';
import '../Anime/anime.css';
import Navegador from '../../Navegador/Navegador';
import ReactPlayer from 'react-player';
import DatosSesion from '../../Formulario/DatosSesion';
import { FaHeart, FaTimesCircle } from 'react-icons/fa'; // Icono de "me gusta" y "cerrar"

const Accion = () => {
    const [videos, setVideos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const { userId } = DatosSesion();
    const playerRef = useRef(null); // Referencia para el ReactPlayer

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/videos/cinehub');
                if (!response.ok) {
                    throw new Error('Error al obtener los videos');
                }
                const data = await response.json();
                // Filtrar los videos que contienen "Acción" en el campo genero
                const actionVideos = data.filter(video => video.genero.toLowerCase().includes('acción'));
                setVideos(actionVideos);
            } catch (error) {
                console.error(error);
            }
        };

        fetchVideos();
    }, []);

    const handleAddToFavorites = async (video) => {
        try {
            const response = await fetch('http://localhost:5000/api/favorites', {
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
                throw new Error('Error al agregar a favoritos');
            }

            console.log(`Agregado a favoritos: ${video.titulo}`);
        } catch (error) {
            console.error(error);
        }
    };

    const handleOpenModal = (video) => {
        setSelectedVideo(video);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedVideo(null);
    };

    const handleFullscreen = () => {
        if (playerRef.current) {
            // Activar el modo de pantalla completa
            playerRef.current.getInternalPlayer().getVideo().requestFullscreen();
        }
    };

    return (
        <div className='anime'>
            <Navegador />
            <div className="container-pelis">
                <h1>ACCION PELICULAS</h1>
                <div className="box-pelis">
                    {videos.map(video => (
                        <div className="box" key={video.id} onClick={() => handleOpenModal(video)}>
                            <h4>{video.titulo}</h4>
                            <img src={video.url_imagen} alt=""  className='verVideo'/>
                        </div>
                    ))}
                </div>

                {modalVisible && selectedVideo && (
                    <div className="modal">
                        <div className="modal-content">
                            <button className="close-btn" onClick={handleCloseModal}>
                                <FaTimesCircle />
                            </button>
                            <ReactPlayer
                                ref={playerRef} // Asignar la referencia al ReactPlayer
                                url={selectedVideo.url_video}
                                controls={false}
                                playing={modalVisible} // Reproduce el video si el modal está visible
                                width="100%"
                                height="100%"
                            />
                            <h2>{selectedVideo.titulo}</h2>
                            <p>{selectedVideo.descripcion}</p>
                            <div className="modal-buttons">
                                <button onClick={handleFullscreen}>
                                    Ver Video
                                </button>
                                <button onClick={() => handleAddToFavorites(selectedVideo)}>
                                    <FaHeart className="favorite-icon" /> Añadir a Favoritos
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accion;