import React from 'react';
import './Equipo.css';
import Barra from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import Buscar from '../Img/2811790.png';
import Mancuernas from '../Img/kit-de-mancuernas-1.jpg';
import Bandas from '../Img/bandas-de-resistencia.jpg';
import APEX from '../Img/APEX.jpg';
import Flybird from '../Img/Flybird.jpg';
import Marcy from '../Img/Marcy.jpg';
import Flexiones from '../Img/Flexiones.jpg';
import Rueda from '../Img/Rueda.jpg';
import Barra3en1 from '../Img/Barra3en1.png';
import Cinturon from '../Img/Cinturon.jpg';
import { Card, CardGroup, Button, Col, Row, Container,
ButtonToolbar, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap';


export const Equipo = () => {
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
          <h1>TODOS</h1>
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
              <Row>
                <Col>
                <CardGroup>
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
</CardGroup>
                </Col>
              </Row>
              <p></p>
            </Container>
        </div>
        <Footer />
    </div>
  );
};

export default Equipo;
