import React, { useState, useEffect, useRef } from 'react';
import '../Anime/anime.css';
import Navegador from '../../Navegador/Navegador';
import ReactPlayer from 'react-player';
import DatosSesion from '../../Formulario/DatosSesion';
import { FaHeart, FaTimesCircle } from 'react-icons/fa'; // Icono de "me gusta" y "cerrar"

const Anime = () => {
    const [videos, setVideos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [controlsVisible, setControlsVisible] = useState(false); // Estado para controlar la visibilidad de los controles
    const [favorites, setFavorites] = useState([]); // Estado para almacenar los favoritos
    const { userId } = DatosSesion(); // Obtener el ID del usuario
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
                const actionVideos = data.filter(video => {
                    const normalizedGenre = video.genero.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    return normalizedGenre.includes('anime');
                });
                setVideos(actionVideos);
            } catch (error) {
                console.error(error);
            }
        };


        const fetchFavorites = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/favorites/${userId}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los favoritos');
                }
                const favoriteIds = await response.json();
                setFavorites(favoriteIds); // Actualizar el estado de favoritos
            } catch (error) {
                console.error(error);
            }
        };

        fetchVideos();
        fetchFavorites(); // Cargar los favoritos al inicio
    }, [userId]);

    const handleToggleFavorite = async (video) => {
        const isFavorite = favorites.includes(video.id);

        try {
            if (isFavorite) {
                // Si ya está en favoritos, eliminarlo
                const response = await fetch(`http://localhost:5000/api/favorites/${userId}/${video.id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Error al eliminar de favoritos');
                }

                // Actualizar el estado de favoritos
                setFavorites(prevFavorites => prevFavorites.filter(id => id !== video.id));
                console.log(`Eliminado de favoritos: ${video.titulo}`);
            } else {
                // Si no está en favoritos, agregarlo
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

                // Actualizar el estado de favoritos
                setFavorites(prevFavorites => [...prevFavorites, video.id]);
                console.log(`Agregado a favoritos: ${video.titulo}`);
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

    const handleOpenModal = (video) => {
        setSelectedVideo(video);
        setModalVisible(true);
        setControlsVisible(false); // Inicialmente, los controles están ocultos
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

    const [loading, setLoading] = useState(true); // State to track loading
    const [fondoImagen, setFondoImagen] = useState(0);

    const fondo1 = 'https://i.pinimg.com/originals/2b/aa/bd/2baabdf177a59a4d6d6949a411ad3303.jpg'
    const fondo2 = 'https://1.bp.blogspot.com/-Mu_GHaqWR7E/YEKppGbIZfI/AAAAAAAAbSY/NPLJlyNs2LAjo2VFRUy1o-c4l8yqHZc6ACNcBGAsYHQ/s700/tom%2Band%2Bjerry%2Bposter.jpg'
    const fondo3 = 'https://areajugones.sport.es/wp-content/uploads/2022/07/dragon-ball-super-vol-19.jpg'
    const fondo4 = 'https://occ-0-3011-114.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQE2P2CYmkl1L8cQbiz3qywbLx6-TTnOoJd3npLkgbHTVgEmU52qm46M1uX57Q3QkfQ_w4L_1Mhc9K--a9LWTHpqVoGO.jpg?r=8d0'
    const fondos = [fondo1, fondo2, fondo3, fondo4]

    // Preload images
    useEffect(() => {
        const preloadImages = (images) => {
            return Promise.all(images.map((image) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = image;
                    img.onload = resolve; // Resolve when the image is loaded
                });
            }));
        };

        preloadImages(fondos).then(() => {
            setLoading(false); // Set loading to false when all images are loaded
        });
    }, [fondos]);

    // Change background image every 3 seconds
    useEffect(() => {
        if (!loading) {
            const interval = setInterval(() => {
                setFondoImagen((prevIndex) => (prevIndex + 1) % fondos.length);
            }, 3000); // Change image every 3 seconds

            return () => clearInterval(interval); // Clear interval on unmount
        }
    }, [loading]);

    return (
        <div className='anime'>
            <Navegador />
            <div className="container-pelis">
                <div className="referencia" style={{
                    backgroundImage: loading ? 'none' : `url(${fondos[fondoImagen]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                    }}>
                    <div className="descrip">
                        <h1 style={{color: 'orange'}}>Series de Animes</h1>
                        <p>Tenemos para ti las mejores películas del año, ven aquí y disfrútalas.</p>
                        <p>Desde clásicos de acción hasta los estrenos más recientes, tenemos una amplia selección para todos los gustos.</p>
                        <p>Sumérgete en emocionantes persecuciones, impresionantes escenas de acción y sorprendentes giros argumentales.</p>
                        <p>Prepárate para la adrenalina y la diversión con nuestras películas de acción.</p>
                    </div>
                </div>
                <div className="box-pelis">
                    {[...videos].reverse().map(video => (
                        <div className="box" key={video.id} onClick={() => handleOpenModal(video)}>
                            <p>{video.titulo}</p>
                            <img src={video.url_imagen} alt="" />
                            <button onClick={(e) => {
                                e.stopPropagation(); // Evitar que el clic en el botón cierre el modal
                                handleToggleFavorite(video);
                            }}>
                                <FaHeart className={`favorite-icon ${favorites.includes(video.id) ? 'active' : ''}`} />
                            </button>
                        </div>
                    ))}
                </div>

                {modalVisible && selectedVideo && (
                    <div className="modal_video">
                        <div className="modal_content">
                            <FaTimesCircle className="close_btn" onClick={handleCloseModal} />
                            <ReactPlayer ref={playerRef} url={selectedVideo.url_video} controls={controlsVisible} playing={true} width="100%" height="100%" />
                            <div className="modal_buttons">
                                <button onClick={() => { handleAddToPlaylist(selectedVideo); handleFullscreen(); }}>Ver Video</button>
                                <p> <FaHeart onClick={() => handleToggleFavorite(selectedVideo)} className={`favorite-icon ${favorites.includes(selectedVideo.id) ? 'active' : ''}`} />Favorito</p>
                            </div>
                            <h2>{selectedVideo.titulo}</h2>
                            <p className='descripcion'>{selectedVideo.descripcion}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Anime;
