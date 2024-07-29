import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './Elementos/Inicio/Principal';
import Banner from './Elementos/Banner/Banner';
import Accion from './Elementos/Categorias/Accion/Accion';
import Terror from './Elementos/Categorias/Terror/Terror';
import Comedia from './Elementos/Categorias/Comedia/Comedia';
import Romance from './Elementos/Categorias/Romance/Romance';
import Anime from './Elementos/Categorias/Anime/Anime';
import Drama from './Elementos/Categorias/Drama/Drama';
import Ficcion from './Elementos/Categorias/Ficcion/Ficcion';
import Musical from './Elementos/Categorias/Musical/Musical';

import ResetPassword from './Elementos/ResetPassword/ResetPassword';
import NewPassword from './Elementos/ResetPassword/NewPassword';
import Perfil from './Elementos/Perfil/Perfil';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Principal />} />
                    <Route path="/browser" element={<Banner />} />
                    <Route path="/browser/accion" element={<Accion />} />
                    <Route path="/browser/terror" element={<Terror />} />
                    <Route path="/browser/comedia" element={<Comedia />} />
                    <Route path="/browser/romance" element={<Romance />} />
                    <Route path="/browser/anime" element={<Anime />} />
                    <Route path="/browser/drama" element={<Drama />} />
                    <Route path="/browser/ficcion" element={<Ficcion />} />
                    <Route path="/browser/musical" element={<Musical />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/reset-password/:token" element={<NewPassword />} />
                    <Route path='/user-perfil/:username/:id' element={<Perfil />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;