import React from 'react';
import './Hero.css';
import { Button, Col, Row, Carousel, Container } from 'react-bootstrap';
import Barra3en1 from '../Img/Barra3en1.png';
import Pesas from '../Img/Pesas.png';
import Suplementos from '../Img/Suplementos.jpg';

const Hero = () => {
  return (
    <div className='Fondo'>
        <Container className='back_carousel'>
            <Row>
                <Col sm={6}>
                  <Row>
                    <h1>SportStore</h1>
                  </Row>
                  <Row>
                    <p>
                    Tienda de suplementos y equipo de entrenamiento de alta calidad, y a presios increibles.
                    </p>
                    <p>
                    Productos tanto para ejercicios con peso corporal (Calistenia), pesas para entrenamientos
                    de gimnasio, y suplementos deportivos.
                    </p>
                  </Row>
                  <Row>
                    <Button variant="outline-secondary" href='/Contacto'>CONTÁCTENOS...</Button>{' '}
                  </Row>
                </Col>
                
                <Col sm={6}>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Suplementos}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Barra3en1}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pesas}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Hero;
