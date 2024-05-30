import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Principal from './Elementos/Inicio/Principal';
import Peliculas from './Elementos/Navegador/Navegador';
import NavAccion from './Elementos/Categorias/Accion/NavAccion'
import NavTerror from './Elementos/Categorias/Terror/NavTerror';
import NavComedia from './Elementos/Categorias/Comedia/NavComedia';
import NavFiccion from './Elementos/Categorias/Ficcion/NavFiccion';
import NavRomance from './Elementos/Categorias/Romance/NavRomance';
function App() {

    return (
        <div className='App'>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Principal />} />
                <Route path="/browser" element={<Peliculas />} />
                <Route path="/browser/accion" element={<NavAccion />} />
                <Route path="/browser/terror" element={<NavTerror />} />
                <Route path="/browser/comedia" element={<NavComedia />} />
                <Route path="/browser/ficcion" element={<NavFiccion />} />
                <Route path="/browser/romance" element={<NavRomance />} />
+            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;