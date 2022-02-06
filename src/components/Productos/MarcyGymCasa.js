import React from 'react';
import './BarraMultifuncional.css';
import Barra from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import marcyCasa from '../Img/Marcy.jpg';
import Buscar from '../Img/2811790.png';
import { ButtonToolbar, ButtonGroup, Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

export const MarcyGymCasa = () => {
  return (
    <div className='Fondo-app'>
    <Barra />
    <div className='barraBuscar'>
<ButtonToolbar
  className="justify-content-between"
  aria-label="Toolbar with Button groups"
>
  <ButtonGroup aria-label="First group">
  <Button variant="outline-secondary" href='/Equipo'>TODOS</Button>{' '}
  <Button variant="outline-secondary" href='/Calistenia'>CALISTENIA</Button>{' '}
  <Button variant="outline-secondary" href='/Gym'>GYM</Button>{' '}
  </ButtonGroup>
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
    <div className='Fondo-producto'>
        <Container className='bodyProductos'>
            <Row>
                <Col md='9'>
                      <img 
                      className='fotoBarra3_1'
                      src={marcyCasa}
                      />
                </Col>
                <Col md="3">
                    <p></p>
                <h4>Marcy - Gimnasio en casa</h4>
                <p>$ 3.952.560</p>
                <p></p>
                <p></p>
                <p>Llega gratis en cuatro días hábiles</p>
                <p>Devolucion gratis, si lo entrega antes de 30 días de recibirlo</p>
                <p className='disponible'>Disponible</p>

                <Button variant="outline-secondary" href='/Contacto'>Comprar ahora</Button>{' '}

                </Col>
            </Row>
        </Container>
    </div>
    <Footer />
</div>
  );
};

export default MarcyGymCasa;
