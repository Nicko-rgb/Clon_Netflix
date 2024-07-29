import './reset.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!email) {
            setError('Por favor, ingresa tu correo electrónico.');
            return;
        }
        setMessage('Enviando ...')
        try {
            const response = await axios.post('http://localhost:5000/api/reset-password', { email });
            setMessage('Enlace enviado, revise su Email ✓✓');
        } catch (error) {
            console.error('Error al enviar el enlace de restablecimiento:', error);
            setMessage('')
            setError('Error al enviar el enlace. Inténtalo de nuevo.');
        }
    };

    return (
        <div className='reset-password'>
            <h2>Recuperar Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <label>Correo Electrónico</label>
                <input type="email" placeholder='Correo Electrónico' value={email} onChange={(e) => setEmail(e.target.value)} />
                {message && <p className="success">{message}</p>}
                {error && <p className="error">{error}</p>}
                <button type='submit'>Enviar enlace de restablecimiento</button>
            </form>
        </div>
    );
};

export default ResetPassword;