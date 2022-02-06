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
import BarraMultifuncional from './components/Productos/BarraMultifuncional';
import Bandas_resistencia from './components/Productos/Bandas_resistencia';
import RuedaAbdominal from './components/Productos/RuedaAbdominal';
import MiniParalelas from './components/Productos/MiniParalelas';
import Paralelas from './components/Productos/Paralelas';
import CinturonLastre from './components/Productos/CinturonLastre';
import AnillasGimnasia from './components/Productos/AnillasGimnasia';
import BarraPared from './components/Productos/BarraPared';
import ParalelaFlexiones from './components/Productos/ParalelaFlexiones';
import Mancuerna20KG from './components/Productos/Mancuerna20KG';
import TotalGym from './components/Productos/TotalGym';
import SoporteMancuerna from './components/Productos/SoporteMancuerna';
import MarcyGymCasa from './components/Productos/MarcyGymCasa';
import TapeteEjercicio from './components/Productos/TapeteEjercicio';
import FlexHome from './components/Productos/FlexHome';
import BancaPesas from './components/Productos/BancaPesas';
import BarraCurva from './components/Productos/BarraCurva';
import JuegoPesas from './components/Productos/JuegoPesas';
import BarrasProteína from './components/ProductoSuplementos/BarrasProteína';
import BodyFortress from './components/ProductoSuplementos/BodyFortress';
import Conjuntocreatina from './components/ProductoSuplementos/Conjuntocreatina';
import GalletaProteínas from './components/ProductoSuplementos/GalletaProteínas';
import IsopureZero from './components/ProductoSuplementos/IsopureZero';
import LARGININE from './components/ProductoSuplementos/L-ARGININE';
import MicronizadoCreatina from './components/ProductoSuplementos/MicronizadoCreatina';
import OptimumNutritio from './components/ProductoSuplementos/OptimumNutritio';
import PolvoElectrolítico from './components/ProductoSuplementos/PolvoElectrolítico';

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
          <Route path="/Suplementos/Barras_de_proteina_de_suero" element={<BarrasProteína />} />
          <Route path="/Suplementos/Body_Fortress" element={<BodyFortress />} />
          <Route path="/Suplementos/Conjunto_de_creatina_y_preentrenamiento" element={<Conjuntocreatina />} />
          <Route path="/Suplementos/Galleta_de_proteinas_Ques_Nutrition" element={<GalletaProteínas />} />
          <Route path="/Suplementos/Isopure_zero_carb" element={<IsopureZero />} />
          <Route path="/Suplementos/L-ARGININE" element={<LARGININE />} />
          <Route path="/Suplementos/Polvo_micronizado_de_creatina" element={<MicronizadoCreatina />} />
          <Route path="/Suplementos/Optimum_Nutritio_Estandar_dorado" element={<OptimumNutritio />} />
          <Route path="/Suplementos/Polvo_electrolitico_DripDrop" element={<PolvoElectrolítico />} />
          
          <Route path="/Equipo" element={<Equipo />} />
          <Route path="/Calistenia" element={<Calistenia />} />

          <Route path="/Calistenia/Barra_3_en_1" element={<BarraMultifuncional />} />
          <Route path="/Calistenia/Bandas_resistencia" element={<Bandas_resistencia />} />
          <Route path="/Calistenia/Rueda_abdominal" element={<RuedaAbdominal />} />
          <Route path="/Calistenia/Miniparalela" element={<MiniParalelas />} />
          <Route path="/Calistenia/Paralela" element={<Paralelas />} />
          <Route path="/Calistenia/Cinturon_para_lastre" element={<CinturonLastre />} />
          <Route path="/Calistenia/Anillas_de_entrenamiento" element={<AnillasGimnasia />} />
          <Route path="/Calistenia/Barra_de_dominadas_para_marco" element={<BarraPared />} />
          <Route path="/Calistenia/Paralela_para_flexiones" element={<ParalelaFlexiones />} />
          
          <Route path="/Gym" element={<Gym />} />
          <Route path="/Gym/Kit_de_mancuernas_de_20KG" element={<Mancuerna20KG />} />
          <Route path="/Gym/Total_Gym_APEX" element={<TotalGym />} />
          <Route path="/Gym/Soporte_para_mancuernas" element={<SoporteMancuerna />} />
          <Route path="/Gym/Marcy_gimnasio_en_casa" element={<MarcyGymCasa />} />
          <Route path="/Gym/Tapete_de_ejercicios_extra_grueso" element={<TapeteEjercicio />} />
          <Route path="/Gym/Flex_Home" element={<FlexHome />} />
          <Route path="/Gym/Banca_de_pesas" element={<BancaPesas />} />
          <Route path="/Gym/Conjunto_de_barra_curva" element={<BarraCurva />} />
          <Route path="/Gym/EnterSports_Mancuernas" element={<JuegoPesas />} />
          
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
