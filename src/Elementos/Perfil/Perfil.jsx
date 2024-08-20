import './perfil.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import DatosSesion from '../Formulario/DatosSesion';
import Navegador from '../Navegador/Navegador';
import EditPerfil from './EditPerfil';

export const Perfil = () => {
    const { userId, userName, userApellido, userEmail, handleLogout } = DatosSesion();
    const [isEditing, setIsEditing] = useState(false);
    const [randomVideos, setRandomVideos] = useState([]);
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:5000/api/users/${userId}`);
                alert('Cuenta eliminada con éxito.');
                navigate('/'); // Redirigir a la página de inicio
            } catch (error) {
                console.error('Error al eliminar la cuenta:', error);
                alert('Error al eliminar la cuenta. Inténtalo de nuevo.');
            }
        }
    };

    const fetchRandomVideos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/videos/random?count=20'); // Asegúrate de tener esta ruta en tu servidor
            setRandomVideos(response.data);
        } catch (error) {
            console.error('Error al obtener videos aleatorios:', error);
        }
    };

    useEffect(() => {
        fetchRandomVideos();
    }, []);

    return (
        <div className="perfil">
            <Navegador />
            <div className="sub-perfil">
                <div className="box box-perfil">
                    <FaUserCircle className='iconP' />
                    <h2>{userName} {userApellido}</h2>
                    <p>{userEmail}</p>
                    <p className='id'>{userId}</p>
                    <div>
                        <button className="btn" onClick={() => setIsEditing(true)}>
                            <MdOutlineModeEdit className='ico' /> Editar Perfil
                        </button>
                        <button className="btn" onClick={handleDeleteAccount}>
                            <MdDeleteOutline className='ico' /> Borrar Cuenta
                        </button>
                        <button className="btn" onClick={handleLogout}><IoIosLogOut className='ico' /> Cerrar Sesión</button>
                    </div>
                </div>
                <div className="videos_ramdom">
                    <h2>Puede que te Gusten</h2>
                    <div className="video-list">
                        {randomVideos.length > 0 ? (
                            randomVideos.map(video => (
                                <div className="box" key={video.id}>
                                    <img src={video.url_imagen} alt={video.titulo} />
                                    <p>{video.titulo}</p>
                                </div>
                            ))
                        ) : (
                            <p>No hay videos disponibles.</p>
                        )}
                    </div>
                </div>
            </div>
            {isEditing && (
                <EditPerfil
                    userId={userId} 
                    userName={userName} 
                    userApellido={userApellido} 
                    userEmail={userEmail} 
                    onClose={() => setIsEditing(false)} 
                />
            )}
        </div>
    );
}

export default Perfil;
