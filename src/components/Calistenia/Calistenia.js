import React from 'react';
import './Calistenia.css';
import Barra from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Buscar from '../Img/2811790.png';
import Bandas from '../Img/bandas-de-resistencia.jpg';
import Rueda from '../Img/Rueda.jpg';
import Barra3en1 from '../Img/Barra3en1.png';
import Mini from '../Img/Mini.jpg';
import Paralelas from '../Img/Paralelas.jpg';
import Cinturon from '../Img/Cinturon.jpg';
import Anillas from '../Img/Anillas.jpg';
import Dominadas from '../Img/Dominadas.jpg';
import Flexiones from '../Img/Flexiones.jpg';
import { ButtonToolbar, ButtonGroup, Button, InputGroup, FormControl, Container,
    Row, Col, Card, CardGroup } from 'react-bootstrap';

export const Calistenia = () => {

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
          <h1>CALISTENIA</h1>
          <div>
        <Container>
              <Row>
                <Col>
                <p></p>
                <CardGroup>
                <Card className='card'>
  <Button variant="light" href='/Calistenia/Bandas_resistencia'>
    <Card.Img variant="top" src={Bandas} />
    <Card.Body>
      <Card.Title>Set de bandas de resistencia</Card.Title>
      <Card.Text>
        Set de bandas elasticas para activacion e inisación en calistenia.
        <p>$ 33.800</p>
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
  <Button variant="light" href='/Calistenia/Rueda_abdominal'>
    <Card.Img variant="top" src={Rueda} />
    <Card.Body>
      <Card.Title>Rueda abdominal</Card.Title>
      <Card.Text>
        Rodillo para abdominales fuertes.
        <p>$ 41.504</p>
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
  <Button variant="light" href='/Calistenia/Barra_3_en_1'>
    <Card.Img variant="top" src={Barra3en1} />
    <Card.Body>
      <Card.Title>Barra 3 en 1</Card.Title>
      <Card.Text>
        Barra para hacer dominadas + fondos + abdominales.
        <p>$ 99.990</p>
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
  <Button variant="light" href='/Calistenia/Miniparalela'>
    <Card.Img variant="top" src={Mini} />
    <Card.Body>
      <Card.Title>Miniparalelas</Card.Title>
      <Card.Text>
        Juego de miniparalelas para ejercicios con peso corporal.
        <p>$ 158.222</p>
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
  <Button variant="light" href='/Calistenia/Paralela'>
    <Card.Img variant="top" src={Paralelas} />
    <Card.Body>
      <Card.Title>Paralelas</Card.Title>
      <Card.Text>
        Juego de paralelas para hacer fondos.
        <p>$ 435.179</p>
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
    <Button variant="light" href='/Calistenia/Cinturon_para_lastre'>
    <Card.Img variant="top" src={Cinturon} />
    <Card.Body>
      <Card.Title>Cinturon para lastre</Card.Title>
      <Card.Text>
        Cinturon para hacer incrementar peso en ejercicios de calistenia.
        <p>$ 138.439</p>
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
    <Button variant="light" href='/Calistenia/Anillas_de_entrenamiento'>
    <Card.Img variant="top" src={Anillas} />
    <Card.Body>
      <Card.Title>Anillas de entrenamiento</Card.Title>
      <Card.Text>
        Anillos de gimnasia con correa ajustable.
        <p>$ 106.787</p>
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
    <Button variant="light" href='/Calistenia/Barra_de_dominadas_para_marco'>
    <Card.Img variant="top" src={Dominadas} />
    <Card.Body>
      <Card.Title>Barra de dominada para marco</Card.Title>
      <Card.Text>
        Barra de dominadas para marco de puerta o pasillo delgado.
        <p>$ 118.577</p>
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
    <Button variant="light" href='/Calistenia/Paralela_para_flexiones'>
    <Card.Img variant="top" src={Flexiones} />
    <Card.Body>
      <Card.Title>Paralela para flexiones</Card.Title>
      <Card.Text>
        Juego de paralelas de flexiones para mayor activación.
        <p>$ 118.656</p>
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

export default Calistenia;
