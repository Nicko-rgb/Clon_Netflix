import {Link } from 'react-router-dom';

const SesionForm = () => {
    return(
        <form action="" className='registro'>
            <h2>INICIAR SESION</h2>
            <div>
                <input type="text" placeholder='' />
                <label htmlFor="">Correo Electronico</label>
            </div>
            <div>
                <input type="password" placeholder='' />
                <label htmlFor="">Contraseña</label>
            </div>
            <Link to = '/browser' className='comenzar'>INICIAR SESION</Link>
        </form>
    )
}

export default SesionForm