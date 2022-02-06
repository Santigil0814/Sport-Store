import './App.css';
import Inicio from './components/Inicio/Inicio'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InicioSesion from './components/InicioSesion/InicioSesion';
import OlvidoContraseña from './components/OlvidoContraseña/OlvidoContraseña';
import Registrase from './components/Registrarse/Registrase';
import Suplementos from './components/Suplementos/Suplementos';
import Equipo from './components/Equipo/Equipo';
import Contacto from './components/Contacto/Contacto';
import Calistenia from './components/Calistenia/Calistenia';
import Gym from './components/Gym/Gym';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/InicioSesion" element={<InicioSesion />} />
          <Route path="/OlvidoContrasena" element={<OlvidoContraseña />} />
          <Route path="/Registrarse" element={<Registrase />} />
          <Route path="/Suplementos" element={<Suplementos />} />
          
          <Route path="/Equipo" element={<Equipo />} />
          <Route path="/Calistenia" element={<Calistenia />} />
          <Route path="/Gym" element={<Gym />} />
          
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
