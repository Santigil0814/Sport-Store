import React from 'react';
import './Navbar.css';
import Logo from '../Img/Logo.png';
import { Navbar, Nav } from 'react-bootstrap';

const Barra = () => {
  
  return (
    <div className='nav'>
      <Navbar className='Barra' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <img
          className="Logo"
          src={Logo}
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/Suplementos">SUPLEMENTOS</Nav.Link>
            <Nav.Link href="/Equipo">EQUIPO</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/InicioSesion">INICIO DE SESIÓN</Nav.Link>
            <Nav.Link eventKey={2} href="/Contacto">
              CONTÁCTENOS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Barra;
