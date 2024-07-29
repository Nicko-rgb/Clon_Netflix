import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let userData = {
    id: null,
    nombre: '',
    apellido: '',
    email: ''
};

export const setUserData = (data) => {
    userData = data;
    localStorage.setItem('userData', JSON.stringify(data));
};

export const getUserData = () => {
    return userData;
};

export const getIsLoggedIn = () => {
    return !!userData.nombre; // Retorna true si hay un nombre
};

export const updateUserData = (updatedData) => {
    userData = { ...userData, ...updatedData };
    localStorage.setItem('userData', JSON.stringify(userData));
};

const DatosSesion = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState('');
    const [userApellido, setUserApellido] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUserId(parsedUserData.id);
            setUserName(parsedUserData.nombre);
            setUserApellido(parsedUserData.apellido);
            setUserEmail(parsedUserData.email);
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (data) => {
        setUserId(data.id);
        setUserName(data.nombre);
        setUserApellido(data.apellido);
        setUserEmail(data.email);
        setIsLoggedIn(true);
        setUserData(data); // También actualiza el almacenamiento local
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserId(null);
        setUserName('');
        setUserApellido('');
        setUserEmail('');
        localStorage.removeItem('userData');
        navigate('/');
    };

    return { userId, userName, userApellido, userEmail, isLoggedIn, handleLogin, handleLogout, updateUserData };
};

export default DatosSesion;