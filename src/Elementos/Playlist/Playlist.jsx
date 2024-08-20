import './../Favoritos/favoritos.css'; // Usar el mismo CSS que en Favoritos
import React, { useEffect, useState, useRef } from 'react';
import { FaHeart, FaTimesCircle } from 'react-icons/fa'; // Icono de "me gusta" y "cerrar"
import Navegador from '../Navegador/Navegador';
import ReactPlayer from 'react-player';
import DatosSesion from '../Formulario/DatosSesion';

export const Playlist = () => {
    const { userName, userApellido, userId } = DatosSesion();
    const [playlist, setPlaylist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [controlsVisible, setControlsVisible] = useState(false);
    const playerRef = useRef(null);

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                // Obtener los IDs de los videos en la lista de reproducción
                const response = await fetch(`http://localhost:5000/api/playlist/${userId}`);
                if (!response.ok) {
                    throw new Error('Error al obtener la lista de reproducción');
                }
                const videoIds = await response.json();

                // Si no hay videos en la lista, salir
                if (videoIds.length === 0) {
                    setPlaylist([]);
                    setLoading(false);
                    return;
                }

                // Obtener los detalles de los videos usando los IDs
                const videoResponses = await Promise.all(
                    videoIds.map(id =>
                        fetch(`http://localhost:5000/api/videos/cine/${id}`) // Asegúrate de tener esta ruta en tu servidor
                    )
                );
                const videos = await Promise.all(videoResponses.map(res => res.json()));
                setPlaylist(videos);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaylist();
    }, [userId]);

    if (loading) {
        return (
            <div className="cargando">
                <div className="cargando-content">
                    <div className="cargando-circle"></div>
                    <h2>Cargando Playlist...</h2>
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
                <h1>Playlist de {userName} {userApellido}</h1>
                <div className="box-pelis">
                    {playlist.length > 0 ? (
                        playlist.map(video => (
                            <div className="box" key={video.id} onClick={() => {
                                setSelectedVideo(video);
                                setModalVisible(true);
                            }}>
                                <p>{video.titulo}</p>
                                <img src={video.url_imagen} alt={video.titulo} />
                            </div>
                        ))
                    ) : (
                        <p>No tienes videos en tu lista de reproducción.</p>
                    )}
                </div>
            </div>

            {modalVisible && selectedVideo && (
                <div className="modal_video">
                    <div className="modal_content">
                        <FaTimesCircle className="close_btn" onClick={() => setModalVisible(false)} />
                        <ReactPlayer ref={playerRef} url={selectedVideo.url_video} controls={controlsVisible} playing={true} width="100%" height="100%" />
                        <div className="modal_buttons">
                            <button onClick={() => { setControlsVisible(true); handleFullscreen(); }}>Ver Video</button>
                            <p> <FaHeart style={{color: 'red'}} className='favorite-icon'/>Favorito</p>
                        </div>
                        <h2>{selectedVideo.titulo}</h2>
                        <p className='descripcion'>{selectedVideo.descripcion}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Playlist;