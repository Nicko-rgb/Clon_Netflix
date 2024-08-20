import React, { useState, useEffect, useRef } from 'react';
import '../Anime/anime.css';
import Navegador from '../../Navegador/Navegador';
import ReactPlayer from 'react-player';
import DatosSesion from '../../Formulario/DatosSesion';
import { FaHeart, FaTimesCircle } from 'react-icons/fa'; // Icono de "me gusta" y "cerrar"

const Romance = () => {
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
                    return normalizedGenre.includes('romance');
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

    const fondo1 = 'https://th.bing.com/th/id/R.62d3417246a9269a0dc7288ed9e0439d?rik=QygXHJXL6u6rSQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-dGS5K8YyiJo%2fUNBPSuQw4YI%2fAAAAAAAAKxE%2f0ebyPjVKhUQ%2fs1600%2fCouple-in-Love-Photography.jpg&ehk=fybhUO0oOc2jjOYW0BII9UQivBmWjy6h8GkG%2fUHcP%2bY%3d&risl=&pid=ImgRaw&r=0'
    const fondo2 = 'https://th.bing.com/th/id/R.e438d024b00765ec33a688c4900e71fb?rik=9%2flXtShtLAV6ag&riu=http%3a%2f%2fmedia1.santabanta.com%2ffull1%2fEmotions%2fRomance%2fromance-48a.jpg&ehk=D%2fs7ZDd7KDDi7dqCflFnLU4M%2fxf9zydKWAR2FlhKuEQ%3d&risl=&pid=ImgRaw&r=0'
    const fondo3 = 'https://www.cinesargentinos.com.ar/static/archivos/48246'
    const fondo4 = 'https://is3-ssl.mzstatic.com/image/thumb/80axzqKAlMX5s0tY84aPNw/2000x1125.jpg'
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
                        <h1 style={{color: 'pink'}}>Las Mejores reries de Romance para ti</h1>
                        <p>Tenemos para ti las mejores películas del año, ven aquí y disfrútalas.</p>
                        <p>Desde clásicos de acción hasta los estrenos más recientes, tenemos una amplia selección para todos los gustos.</p>
                        <p>Sumérgete en emocionantes persecuciones, impresionantes escenas de acción y sorprendentes giros argumentales.</p>
                        <p>Prepárate para la adrenalina y la diversión con nuestras películas de acción.</p>
                    </div>
                </div>
                <div className="box-pelis">
                    {videos.map(video => (
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

export default Romance;
