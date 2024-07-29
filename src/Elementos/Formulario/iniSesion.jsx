import './registro.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setUserData } from './DatosSesion';

const SesionForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!email || !password) {
            setError('Todos los campos son obligatorios.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email,
                password,
            });
            console.log('Inicio de sesión exitoso:', response.data);
            setIsLoading(false);
            setUserData(response.data);
            navigate('/browser');
        } catch (error) {
            setIsLoading(false);
            if (error.response && error.response.status === 401) {
                setError('Credenciales incorrectas. Inténtalo de nuevo.');
            } else {
                console.error('Error al iniciar sesión:', error);
                setError('Error al iniciar sesión. Inténtalo de nuevo.');
            }
        }
    };

    const handleForgotPassword = () => {
        navigate('/reset-password'); // Redirigir a la ruta de recuperación de contraseña
    };

    return (
        <form className='registro' onSubmit={handleSubmit}>
            <h2>INICIAR SESION</h2>
            <div>
                <input
                    type="email"
                    placeholder=''
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Correo Electrónico</label>
            </div>
            <div>
                <input
                    type="password"
                    placeholder=''
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label>Contraseña</label>
            </div>
            {error && <p className="error">{error}</p>}
            <button type='submit' className='comenzar'>INICIAR SESION</button>
            <p onClick={handleForgotPassword} className="forgot-password" style={{cursor: 'pointer'}}>Olvidaste la contraseña?</p>
            {isLoading && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="loader"></div>
                        <p>Iniciando sesión...</p>
                    </div>
                </div>
            )}
        </form>
    );
};

export default SesionForm;