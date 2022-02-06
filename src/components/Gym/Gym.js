import React from 'react';
import './Gym.css';
import Footer from '../Footer/Footer';
import Barra from '../Navbar/Navbar';
import Buscar from '../Img/2811790.png';
import Mancuernas from '../Img/kit-de-mancuernas-1.jpg';
import APEX from '../Img/APEX.jpg';
import Soporte from '../Img/Soporte.jpg';
import Marcy from '../Img/Marcy.jpg';
import Tapete from '../Img/Tapete.jpg';
import Bowflex from '../Img/Bowflex.jpg';
import Flybird from '../Img/Flybird.jpg';
import Tubo from '../Img/Barra.jpg';
import JuegoMancuernas from '../Img/JuegoMancuernas.jpg';
import { ButtonToolbar, ButtonGroup, Button, InputGroup, FormControl, Container,
    Row, Col, Card, CardGroup } from 'react-bootstrap';
    
export const Gym = () => {
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
<div className='BODY'>
          <h1>GYM</h1>
          <div>
        <Container>
              <Row>
                <Col>
                <p></p>
                <CardGroup>
  <Card className='card'>
  <Button variant="light" href='/Gym/Kit_de_mancuernas_de_20KG'>
    <Card.Img variant="top" src={Mancuernas} />
    <Card.Body>
      <Card.Title>Kit de mancuernas de 20KG</Card.Title>
      <Card.Text>
        Kit de mancuerna adaptable hasta los 20 KG.
        <p>$ 185.590</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Button variant="link">Ver más</Button>
      </small>
    </Card.Footer>
    </Button>
  </Card>
  <Card>
  <Button variant="light" href='/Gym/Total_Gym_APEX'>
    <Card.Img variant="top" src={APEX} />
    <Card.Body>
      <Card.Title>Total Gym APEX</Card.Title>
      <Card.Text>
        Equipo versatil de entrenamiento de fuerza total para interior y hogar.
        <p>$ 2.373.884</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Button variant="link">Ver más</Button>
      </small>
    </Card.Footer>
    </Button>
  </Card>
  <Card>
  <Button variant="light" href='/Gym/Soporte_para_mancuernas'>
    <Card.Img variant="top" src={Soporte} />
    <Card.Body>
      <Card.Title>Soporte para mancuernas</Card.Title>
      <Card.Text>
        Para gimnsaio o casa, diseño compacto y versátil.
        <p>$ 237.352</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Button variant="link">Ver más</Button>
      </small>
    </Card.Footer>
    </Button>
  </Card>
</CardGroup>
                </Col>
              </Row>
              <p></p>
              <Row>
                <Col>
                <CardGroup>
  <Card>
  <Button variant="light" href='/Gym/Marcy_gimnasio_en_casa'>
    <Card.Img variant="top" src={Marcy} />
    <Card.Body>
      <Card.Title>Marcy - Gimnsaio en casa</Card.Title>
      <Card.Text>
        gimnasio apilable con polea y desarrollador de brazos y piernas con 68 KG de peso.
        <p>$ 3.952.560</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Button variant="link">Ver más</Button>
      </small>
    </Card.Footer>
    </Button>
  </Card>
  <Card>
  <Button variant="light" href='/Gym/Tapete_de_ejercicios_extra_grueso'>
    <Card.Img variant="top" src={Tapete} />
    <Card.Body>
      <Card.Title>Tapete de ejercicios extra grueso</Card.Title>
      <Card.Text>
        Tapete de 3/4 pulgada o 1 pulgada hechas de espuma EVA entrelazada.
        <p>$ 221.526</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Button variant="link">Ver más</Button>
      </small>
    </Card.Footer>
    </Button>
  </Card>
  <Card>
  <Button variant="light" href='/Gym/Flex_Home'>
    <Card.Img variant="top" src={Bowflex} />
    <Card.Body>
      <Card.Title>Flex home</Card.Title>
      <Card.Text>
        Gimnasio de talla única con un peso de 65 KG.
        <p>$ 3.618.176</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Button variant="link">Ver más</Button>
      </small>
    </Card.Footer>
    </Button>
  </Card>
</CardGroup>
                </Col>
              </Row>
              <p></p>
              <Row>
                <Col>
                <CardGroup>
  <Card>
  <Button variant="light" href='/Gym/Banca_de_pesas'>
    <Card.Img variant="top" src={Flybird} />
    <Card.Body>
      <Card.Title>Banca de pesas</Card.Title>
      <Card.Text>
        Banca para entrenamiento de fuerza ajustable para entrenamiento de cuerpo completo.
        <p>$ 651.998</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Button variant="link">Ver más</Button>
      </small>
    </Card.Footer>
  </Button>
  </Card>
  <Card>
  <Button variant="light" href='/Gym/Conjunto_de_barra_curva'>
    <Card.Img variant="top" src={Tubo} />
    <Card.Body>
      <Card.Title>Conjunto de barra curva</Card.Title>
      <Card.Text>
        Conjunto de barra curva con seguros marca Marcy.
        <p>$ 158.974</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Button variant="link">Ver más</Button>
      </small>
    </Card.Footer>
    </Button>
  </Card>
  <Card>
  <Button variant="light" href='/Gym/EnterSports_Mancuernas'>
    <Card.Img variant="top" src={JuegoMancuernas} />
    <Card.Body>
      <Card.Title>EnterSports Mancuernas</Card.Title>
      <Card.Text>
        Mancuernas ajustables de 24 KG.
        <p>$ 652.749</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Button variant="link">Ver más</Button>
      </small>
    </Card.Footer>
    </Button>
  </Card>
</CardGroup>
                </Col>
              </Row>
              <p></p>
            </Container>
        </div>
      </div>
      <Footer />
  </div>
    );
};

export default Gym;
