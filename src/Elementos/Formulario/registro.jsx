import './registro.css'
import {Link } from 'react-router-dom';

const RegistroForm = () => {

    return (
        <form className="registro">
            <h2>REGISTRARSE</h2>
            <div>
                <input placeholder='' type='text'></input>
                <label>Nombre</label>
            </div>
            <div>
                <input placeholder='' type='text'></input>
                <label>Apellido</label>
            </div>
            <div>
                <input placeholder="" type='mail'></input>
                <label>Correo Electrónico</label>
            </div>
            <div>
                <input placeholder="" type='password'></input>
                <label>Contraseña</label>
            </div>
            <Link to='/browser' className='comenzar' >COMENZAR</Link>
        </form>
    )
}

export default RegistroForm