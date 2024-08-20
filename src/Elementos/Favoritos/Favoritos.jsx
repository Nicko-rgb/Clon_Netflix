import './favoritos.css';
import React, { useEffect, useState, useRef } from 'react';
import { FaHeart, FaTimesCircle } from 'react-icons/fa'; // Icono de "me gusta" y "cerrar"
import Navegador from '../Navegador/Navegador';
import ReactPlayer from 'react-player';
import DatosSesion from '../Formulario/DatosSesion';

export const Favoritos = () => {
    const { userName, userApellido, userId } = DatosSesion();
    const [favoritos, setFavoritos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [controlsVisible, setControlsVisible] = useState(false);
    const playerRef = useRef(null);

    useEffect(() => {
        const fetchFavoritos = async () => {
            try {
                // Obtener los IDs de los videos favoritos
                const response = await fetch(`http://localhost:5000/api/favorites/${userId}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los favoritos');
                }
                const favoriteIds = await response.json();

                // Si no hay favoritos, salir
                if (favoriteIds.length === 0) {
                    setFavoritos([]);
                    setLoading(false);
                    return;
                }

                // Obtener los detalles de los videos usando los IDs
                const videoResponses = await Promise.all(
                    favoriteIds.map(id => 
                        fetch(`http://localhost:5000/api/videos/cine/${id}`) // Asegúrate de tener esta ruta en tu servidor
                    )
                );
                const videos = await Promise.all(videoResponses.map(res => res.json()));
                setFavoritos(videos);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchFavoritos();
    }, [userId]);

    const handleToggleFavorite = async (videoId) => {
        try {
            const isFavorited = favoritos.some(video => video.id === videoId);
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
                setFavoritos(prevFavoritos => prevFavoritos.filter(video => video.id !== videoId));
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
                const newFavorite = { id: videoId }; // Agrega más propiedades si es necesario
                setFavoritos(prevFavoritos => [...prevFavoritos, newFavorite]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return (
            <div className="cargando">
                <div className="cargando-content">
                    <div className="cargando-circle"></div>
                    <h2>Cargando Favoritos...</h2>
                </div>
            </div>
        )
    }

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

    return (
        <div className="favoritos">
            <Navegador />
            <div className="container-pelis">
                <h1>Favoritos de {userName} {userApellido}</h1>
                <div className="box-pelis">
                    {favoritos.length > 0 ? (
                        favoritos.map(video => (
                            <div className="box" key={video.id} onClick={() => {
                                setSelectedVideo(video);
                                setModalVisible(true);
                            }}>
                                <p>{video.titulo}</p>
                                <img src={video.url_imagen} alt={video.titulo} />
                                <button onClick={(e) => {
                                    e.stopPropagation(); // Evitar que el clic en el botón cierre el modal
                                    handleToggleFavorite(video.id);
                                }}>
                                    <FaHeart className={`favorite-icon ${favoritos.some(fav => fav.id === video.id) ? 'active' : ''}`} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No tienes videos favoritos.</p>
                    )}
                </div>
            </div>

            {modalVisible && selectedVideo && (
                <div className="modal_video">
                    <div className="modal_content">
                        <FaTimesCircle className="close_btn" onClick={() => setModalVisible(false)} />
                        <ReactPlayer ref={playerRef} url={selectedVideo.url_video} controls={controlsVisible} playing={true} width="100%" height="100%" />
                        <div className="modal_buttons">
                            <button onClick={() => { handleToggleFavorite(selectedVideo.id); setControlsVisible(true); handleFullscreen(); }}>Ver Video</button>
                            <p> <FaHeart style={{color: 'red'}} onClick={() => handleToggleFavorite(selectedVideo)} className={`favorite-icon ${favoritos.includes(selectedVideo.id) ? 'active' : ''}`} />Favorito</p>
                        </div>
                        <h2>{selectedVideo.titulo}</h2>
                        <p className='descripcion'>{selectedVideo.descripcion}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Favoritos;