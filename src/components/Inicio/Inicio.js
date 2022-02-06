import React from 'react';
import './Inicio.css';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Barra from '../Navbar/Navbar';
import Buscar from '../Img/2811790.png';
import { Button, ButtonToolbar, InputGroup, FormControl } from 'react-bootstrap';

export const Inicio = () => {
  return (
  <div className='Fondo-app'>
    <Barra/>
    <div className='barraBuscar'>
<ButtonToolbar
    className="justify-content-end"
    aria-label="Toolbar with Button groups"
  >
    <InputGroup>
      <FormControl
        type="text"
        placeholder="Buscar"
        aria-label="Buscar"
        aria-describedby="btnGroupAddon2"
      />
      <Button variant="light" href=''>
      <img
        className="buscar"
        src={Buscar}
      />
      </Button>{' '}
      </InputGroup>
  </ButtonToolbar>
</div>
    <Hero/>
    <Body/>
    <Footer/>
  </div>
  );
};

export default Inicio;
