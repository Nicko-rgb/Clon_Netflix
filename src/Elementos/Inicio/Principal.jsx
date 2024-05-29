import './Principal.css';
import React, { useState } from 'react';
import logoNet from '../IMG/NetSuiza.png';
import foto2 from '../IMG/foto2.jpg';
import foto3 from '../IMG/foto3.jpg'
import stranger from '../IMG/stranger.jpg'
import RegistroForm from '../Formulario/registro';
import SesionForm from '../Formulario/iniSesion';
import { IoCloudDownloadSharp } from "react-icons/io5";

function Principal() {

    const [isRegistroVisible, setIsRegistroVisible] = useState(true);
    const [textoBoton, setTextoBoton] = useState('¿Ya tienes cuenta? Inicia Sesión');


    const toggleFormulario = () => {
        setIsRegistroVisible(!isRegistroVisible);
        setTextoBoton(isRegistroVisible ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión');
    };

    return (
        <div className="App netflix">
            <div className="ini inicio1">
                <nav>
                    <img src={logoNet} title="NetSuiza" alt='Logo'></img>
                    <div className="idiSesion">
                        <select id="opciones" name="opciones">
                            <option value="opcion1">Español</option>
                            <option value="opcion2">Ingles</option>
                            <option value= "opcion3"> portugues</option>
                        </select>
                        <button>Iniciar Sesion</button>
                    </div>
                </nav>
                <div className="portada">
                    <h1>Peliculas y series ilimitadas y mucho mas</h1>
                    <p className="porp1">Disfruta donde quieras. Cancela cuando quieras.</p>
                    <p className="porp2">¿Quieres ver Netflix ya? Ingresa tu email o número de celular para crear una cuenta o reiniciar tu membresía.</p>
                    {isRegistroVisible ? <RegistroForm /> : <SesionForm />}
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
            {/* <div className="ini inicio4">

            </div>
            <div className="ini inicio5">

            </div> */}
        </div>
    );
}

export default Principal;
