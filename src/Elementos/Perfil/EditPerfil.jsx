import './perfil.css';
import React, { useState } from 'react';
import axios from 'axios';
import { LuSave } from "react-icons/lu";
import { RxValueNone } from "react-icons/rx";
import { setUserData } from '../Formulario/DatosSesion'; // Importar la función para actualizar el estado global

const EditPerfil = ({ userId, userName, userApellido, userEmail, onClose }) => {
    const [nombre, setName] = useState(userName);
    const [apellido, setApelli] = useState(userApellido);
    const [email, setEmail] = useState(userEmail);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.put(`http://localhost:5000/api/users/${userId}`, {
                nombre: nombre,
                apellido: apellido,
                email: email,
            });
            setSuccess('Perfil actualizado con éxito.');

            // Actualizar el estado global con los nuevos datos del usuario
            setUserData({
                id: userId,
                nombre: nombre,
                apellido: apellido,
                email: email,
            });

            // Cerrar el formulario después de la actualización
            onClose(); 
            window.location.reload()
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            setError('Error al actualizar completa los campos');
        }
    };

    return (
        <div className="edit-profile">
            <form onSubmit={handleSubmit}>
                <h2>Editar Perfil</h2>
                <div>
                    <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApelli(e.target.value)} required />
                </div>
                <div>
                    <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <button className='btn1' type="submit"><LuSave /> Guardar Cambios</button>
                <button className='btn2' type="button" onClick={onClose}><RxValueNone /> Cancelar</button>
            </form>
        </div>
    );
};

export default EditPerfil;