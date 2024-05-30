import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Principal from './Elementos/Inicio/Principal';
import Peliculas from './Elementos/Peliculas/Peliculas';
function App() {

    return (
        <div className='App'>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Principal />} />
                <Route path="/browser" element={<Peliculas />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;