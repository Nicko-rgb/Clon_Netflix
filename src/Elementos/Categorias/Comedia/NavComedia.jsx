import '../../Navegador/Navegador.css'
import { LuHome, LuUsers2 } from "react-icons/lu";
import { FaRegUser, FaCog, FaRegHeart, FaSearch,FaUserCircle } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { ImExit } from "react-icons/im";
import netZuiza from '../../IMG/NetSuiza.png'
import Comedia from './Comedia';
import {Link } from 'react-router-dom';

const NavTerror = () => {
    return (
        <div className="peliculas">
            <footer>
                <Link to='/browser' className='logo'>
                    <img src={netZuiza} alt="netZuiza"/>
                </Link>
                <div className="buscador">
                    <div className="buscar">
                        <input type="text" />
                        <button className="conte-icon">
                            <FaSearch className='icons'/>
                        </button>
                    </div>
                    <div className="opciones">
                        <Link to='/browser/accion' className='aInicio'>ACCION</Link>
                        <Link to='/browser/terror'>TERROR</Link>
                        <Link to='/browser/comedia'>COMEDIA</Link>
                        <Link to='/browser/romance'>ROMANCE</Link>
                        <a href="#">AMOR</a>
                        <a href="#">DRAMA</a>
                        <Link to='/browser/ficcion'>FICCION</Link>
                        <a href="#">MUSICA</a>
                        <a href="#">FANTASIA</a>
                        <a href="#">DOCUMENTALES</a>
                        <a href="#">ROMANCE</a>
                        <a href="#">INFANTIL</a>
                        <a href="#">AMOR</a>
                        <a href="#">AMOR</a>
                        <a href="#" className='aFinal'>ACCION</a>
                    </div>
                </div>
                <FaUserCircle className='userIcon'/>
            </footer>
            <div className='contenedor'>
                <div className="left-container">
                    <div className="conte-icon">
                        <LuHome className='icons' />
                    </div>
                    <div className="conte-icon">
                        <FaRegUser className='icons' />
                    </div>
                    <div className="conte-icon">
                        <LuUsers2 className='icons' />
                    </div>
                    <div className="conte-icon">
                        <FaRegHeart className='icons' />
                    </div>
                    <div className="conte-icon">
                        <FaCog className='icons' />
                    </div>
                    <div className="conte-icon">
                        <MdInfoOutline className='icons' />
                    </div>
                    <Link className="conte-icon" to='/'>
                        <ImExit className='icons' />
                    </Link>
                </div>
                <div class="menu-oculto">
                    <a href="#">Home</a>
                    <a href="#">Cuenta</a>
                    <a href="#">Amigos</a>
                    <a href="#">Tus gustos</a>
                    <a href="#">Configuracion</a>
                    <a href="#">Informacion</a>
                    <Link to='/'>Cerrar</Link>
                </div>

                <div className="caja-peliculas">
                    <Comedia/>
                </div>

            </div>

        </div>
    )
}

export default NavTerror