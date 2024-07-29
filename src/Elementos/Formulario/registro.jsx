import './registro.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatosSesion from './DatosSesion'; // Importa el hook

const RegistroForm = () => {
    const { handleLogin } = DatosSesion(); // Usa el hook
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!nombre || !apellido || !email || !password) {
            setError('Todos los campos son obligatorios.');
            setIsLoading(false);
            return;
        }

        if (password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/registro', {
                nombre,
                apellido,
                email,
                password,
            });
            console.log('Registro exitoso:', response.data);
            setIsLoading(false);
            handleLogin(response.data); // Llama a handleLogin del hook
            navigate('/browser');
        } catch (error) {
            setIsLoading(false);
            if (error.response && error.response.status === 409) {
                setError('Usuario con este email ya existe');
            } else {
                console.error('Error al registrar:', error);
                setError('Error al registrar. Inténtalo de nuevo.');
            }
        }
    };

    return (
        <form className="registro" onSubmit={handleSubmit}>
            <h2>REGISTRARSE</h2>
            <div>
                <input placeholder='' type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                <label>Nombre</label>
            </div>
            <div>
                <input placeholder='' type='text' value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                <label>Apellido</label>
            </div>
            <div>
                <input placeholder='' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Email</label>
            </div>
            <div>
                <input placeholder='' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <label>Contraseña</label>
            </div>
            {error && <p className="error">{error}</p>}
            <button type='submit' className='comenzar'>COMENZAR</button>
            {isLoading && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="loader"></div>
                        <p>Registrando usuario...</p>
                    </div>
                </div>
            )}
        </form>
    );
};

export default RegistroForm;