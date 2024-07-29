import './Principal.css';
import React, { useState } from 'react';
import Logo from '../IMG/Logo.png'
import foto2 from '../IMG/foto2.jpg';
import foto3 from '../IMG/foto3.jpg'
import stranger from '../IMG/stranger.jpg'
import RegistroForm from '../Formulario/registro';
import SesionForm from '../Formulario/iniSesion';
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Principal() {

    const [isRegistroVisible, setIsRegistroVisible] = useState(true);
    const [textoBoton, setTextoBoton] = useState('¿Ya tienes cuenta? Inicia Sesión');

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleFormulario = () => {
        setIsRegistroVisible(!isRegistroVisible);
        setTextoBoton(isRegistroVisible ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión');
    };

    //efecto para desplazamiento del button último a "inicio1"
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
            }, 1000); // Duración de la animación
        }
    };

    return (
        <div className="App netflix">
            <div className="ini inicio1" id='inicio1'>
                <nav>
                    <img src={Logo} title="CineHub" alt='Logo'></img>
                    <div className="idiSesion">
                        <select id="opciones" name="opciones">
                            <option value="opcion1">Español</option>
                            <option value="opcion2">Ingles</option>
                            <option value="opcion3"> portugues</option>
                        </select>
                        <button onClick={toggleFormulario}>Iniciar Sesion</button>
                    </div>
                </nav>
                <div className="portada">
                    <h1>Peliculas y series ilimitadas y mucho mas</h1>
                    <p className="porp1">Disfruta donde quieras. Cancela cuando quieras.</p>
                    <p className="porp2">¿Quieres ver Netflix ya? Ingresa tu email o número de celular para crear una cuenta o reiniciar tu membresía.</p>
                    {isRegistroVisible ? <SesionForm /> : <RegistroForm /> }
                    <button onClick={toggleFormulario}> {textoBoton} </button>
                </div>
            </div>
            <div className="ini inicio2">
                <div className="subIni2">
                    <h1>Disfruta en tu TV</h1>
                    <p>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
                </div>
                <div className='img'>
                    <img src={foto2}></img>
                </div>
            </div>
            <div className="ini inicio3">
                <div className='ini3img'>
                    <img src={foto3}></img>
                    <div className='imgdescarga'>
                        <img src={stranger}></img>
                        <div className='subdescarga'>
                            <h4>Cosas mas extrañas</h4>
                            <p>Descargar...</p>
                        </div>
                        <IoCloudDownloadSharp className='iconDescarga' />
                    </div>
                </div>
                <div className="subIni3">
                    <h1>Descarga tus programas para verlos sin conexión</h1>
                    <p>Guarda tus programas favoritos y los que quieras ver más tarde.</p>
                </div>
            </div>
            <div className="ini inicio4">
                <h1>Preguntas Frecuentes</h1>
                <aside>
                    <div className='sub_aside'>
                        <div className='preg' onClick={() => toggleAnswer(0)}>
                            <h2>¿Qué es CineHub?</h2>
                            {activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activeIndex === 0 && (
                            <p>
                                CineHub es un servicio de streaming que ofrece una gran variedad de películas,
                                series y documentales premiados en casi cualquier pantalla conectada a internet.
                                Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible.
                                Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
                            </p>
                        )}
                    </div>
                    <div className='sub_aside'>
                        <div className="preg" onClick={() => toggleAnswer(1)}>
                            <h2>¿Dónde Puedo ver CineHub?</h2>
                            {activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activeIndex === 1 && (
                            <p>
                                Aquí va la respuesta a la pregunta "¿Dónde Puedo ver CineHub?"
                            </p>
                        )}
                    </div>
                    <div className='sub_aside'>
                        <div className="preg" onClick={() => toggleAnswer(2)}>
                            <h2>¿Es Apto Para el Público?</h2>
                            {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activeIndex === 2 && (
                            <p>
                                Aquí va la respuesta a la pregunta "¿Es Apto Para el Público?"
                            </p>
                        )}
                    </div>
                    <div className='sub_aside'>
                        <div className="preg" onClick={() => toggleAnswer(3)}>
                            <h2>¿Qué Puedo ver un CineHub?</h2>
                            {activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activeIndex === 3 && (
                            <p>
                                Aquí va la respuesta a la pregunta "¿Qué Puedo ver un CineHub?"
                            </p>
                        )}
                    </div>
                </aside>
                <a href="#inicio1" onClick={(e) => {
                    e.preventDefault(); // Evitar el comportamiento por defecto del enlace
                    scrollToElement('inicio1');
                }}>
                    <button>COMIENZA A VER TUS PELIS</button>
                </a>
            </div>
        </div>
    );
}

export default Principal;
