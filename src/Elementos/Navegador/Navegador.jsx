import './Navegador.css'
import { useRef } from 'react';
import { LuHome } from "react-icons/lu";
import { FaRegUser, FaListUl, FaRegHeart, FaSearch, FaUserCircle } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Logo from '../IMG/Logo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import DatosSesion from '../Formulario/DatosSesion';

const Navegador = () => {
    const { userName, userId, handleLogout } = DatosSesion()

    const enlacessRef = useRef(null);
    const scrollLeft = () => {
        enlacessRef.current.scrollLeft -= 100;
        enlacessRef.current.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
        });
    };

    const scrollRight = () => {
        enlacessRef.current.scrollLeft += 100;
        enlacessRef.current.scrollIntoView({
            behavior: 'smooth',
            inline: 'end',
        });
    };

    //codigo para dirigir a sus propio perfil
    const minusculaName = userName.toLowerCase().replace(/\s+/g, '')
    const rutaPerfil = `/user-perfil/${minusculaName}/${userId}`

    //codigo para realizar la busqueda
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        if (searchTerm === '') {
            inputRef.current.focus();
        }
    }, [searchTerm]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        navigate(`/search?q=${term}`);
    };

    return (
        <div className="navegador">
            <footer>
                <Link to='/browser' className='logo'>
                    <img src={Logo} alt="netZuiza" />
                </Link>
                <div className="buscador">
                    <div className="buscar">
                        <input
                            type="text"
                            placeholder="Buscar videos..."
                            value={searchTerm}
                            onChange={handleSearch}
                            ref={inputRef}
                        />
                        <button className="conte-icon">
                            <FaSearch className='icons' />
                        </button>
                    </div>
                    <div className="opciones">
                        <button className="scroll-btn scroll-left" onClick={scrollLeft}>
                            <FaChevronLeft />
                        </button>
                        <div className="enlaces-container" ref={enlacessRef}>
                            <Link className='a aInicio' to='/browser/accion'>ACCION</Link>
                            <Link className='a' to='/browser/terror'>TERROR</Link>
                            <Link className='a' to='/browser/comedia'>COMEDIA</Link>
                            <Link className='a' to='/browser/romance'>ROMANCE</Link>
                            <Link className='a' to='/browser/anime'>ANIME</Link>
                            <Link className='a' to='/browser/drama'>DRAMA</Link>
                            <Link className='a' to='/browser/ficcion'>FICCION</Link>
                            <Link className='a' to='/browser/musical'>MUSICAL</Link>
                            <a className='a' href="#">FANTASIA</a>
                            <a className='a' href="#">DOCUMENTALES</a>
                            <a className='a' href="#">ROMANCE</a>
                            <a className='a' href="#">INFANTIL</a>
                            <a className='a' href="#">AMOR</a>
                            <a className='a aFinal' href="#" >AMOR</a>
                        </div>
                        <button className="scroll-btn scroll-right" onClick={scrollRight}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                <div className="for-perfil">
                    <h2>Administración de Perfil de Usuario</h2>
                </div>
                <Link to={`${rutaPerfil}`}>
                    <FaUserCircle className='userIcon' />
                </Link>
            </footer>
            <div className="left-container">
                <Link className="conte-icon" to='/browser'>
                    <LuHome className='icons' />
                </Link>
                <Link to={`${rutaPerfil}`} className="conte-icon">
                    <FaRegUser className='icons' />
                </Link>
                <Link to='/favoritos' className="conte-icon">
                    <FaRegHeart className='icons' />
                </Link>
                <Link to='/playlist' className="conte-icon">
                    <FaListUl className='icons' />
                </Link>
                <div className="conte-icon">
                    <MdInfoOutline className='icons' />
                </div>
                <div className="conte-icon" onClick={handleLogout}>
                    <ImExit className='icons' />
                </div>
            </div>
            < FaBars className='menu-nav' />
            <div class="menu-oculto">
                <Link to='/browser'>Inicio</Link>
                <Link to={`${rutaPerfil}`} >Cuenta</Link>
                <a href="/favoritos">Favoritos</a>
                <a href="/playlist">Lista de Reproduccion</a>
                <a href="#">Informacion</a>
                <a onClick={handleLogout}>Cerrar</a>
            </div>

        </div>
    )
}

export default Navegador