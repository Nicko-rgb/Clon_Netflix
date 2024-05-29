import './Peliculas.css'
import { LuHome, LuUsers2 } from "react-icons/lu";
import { FaRegUser, FaCog, FaRegHeart, FaSearch,FaUserCircle } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { ImExit } from "react-icons/im";
import netZuiza from '../IMG/NetSuiza.png'
import Videos from '../Videos/videos';

const Peliculas = () => {
    return (
        <div className="peliculas">
            <footer>
                <img src={netZuiza} alt="netZuiza" className='logo'/>
                <div className="buscador">
                    <div className="buscar">
                        <input type="text" />
                        <button className="conte-icon">
                            <FaSearch className='icons'/>
                        </button>
                    </div>
                    <div className="opciones">
                        <a href="#" className='aInicio'>ACCION</a>
                        <a href="#">TERROR</a>
                        <a href="#">COMEDIA</a>
                        <a href="#">ROMANCE</a>
                        <a href="#">AMOR</a>
                        <a href="#">DRAMA</a>
                        <a href="#">FICCION</a>
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
                    <div className="conte-icon">
                        <ImExit className='icons' />
                    </div>
                </div>
                <div class="menu-oculto">
                    <a href="#">Home</a>
                    <a href="#">Cuenta</a>
                    <a href="#">Amigos</a>
                    <a href="#">Tus gustos</a>
                    <a href="#">Configuracion</a>
                    <a href="#">Informacion</a>
                    <a href="#">Cerrar</a>
                </div>

                <div className="caja-peliculas">
                    <Videos className="videos"/>
                </div>

            </div>

        </div>
    )
}

export default Peliculas