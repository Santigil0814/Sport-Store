import React from 'react';
import '../Productos/BarraMultifuncional.css';
import Barra from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Larganine from '../Img/Larginine.jpg';
import Buscar from '../Img/2811790.png';
import { ButtonToolbar, ButtonGroup, Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

export const LARGININE = () => {
  return (
  
    <div className='Fondo-app'>
          <Barra />
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
    <div className='Fondo-producto'>
        <Container className='bodyProductos'>
            <Row>
                <Col md='9'>
                  <center>
                      <img 
                      className='fotoBarra3_1'
                      src={Larganine}
                      />
                  </center>
                  
                </Col>
                <Col md="3">
                    <p></p>
                <h4>L-ARGININE</h4>
                <p>$ 83.799</p>
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
</div>);
};

export default LARGININE;
