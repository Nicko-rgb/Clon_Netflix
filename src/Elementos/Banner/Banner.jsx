import './banner.css';
import Navegador from '../Navegador/Navegador';
import Videos from '../Videos/videos';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="navegador">
                <Navegador />
            </div>
            <div className="container-pelis">
                <Videos />
            </div>
        </div>
    );
};

export default Banner;
