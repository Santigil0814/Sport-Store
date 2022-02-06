import React from 'react';
import './Suplementos.css';
import Barra from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Buscar from '../Img/2811790.png';
import Proteina from '../Img/Proteina.jpg';
import Whey from '../Img/Whey.jpg';
import Creatina from '../Img/Creatina.jpg';
import Larginine from '../Img/Larginine.jpg';
import Gatorade from '../Img/Gatorade.jpg';
import C4 from '../Img/C4.jpg';
import Galleta from '../Img/Galleta.jpg';
import Electrolitico from '../Img/Electrolitico.jpg';
import Isopure from '../Img/Isopure.jpg';
import { Card, CardGroup, Button, Col, Row, Container, ButtonToolbar, ButtonGroup,
    InputGroup, FormControl } from 'react-bootstrap';

export const Suplementos = () => {
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
        <div className='BODY'>
            <h1>Suplementos</h1>
            <Container>
              <Row>
                <Col>
                <CardGroup>
                <Card className='card'>
                <Button variant="light" href='/Suplementos/Body_Fortress'>
    <Card.Img variant="top" src={Proteina} />
    <Card.Body>
    <Card.Title>Body Fortress</Card.Title>
      <Card.Text>
        Polvo de proteína de suero de leche.
        <p>$ 75.134</p>
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
    
  <Button variant="light" href='/Suplementos/Optimum_Nutritio_Estandar_dorado'>
    <Card.Img variant="top" src={Whey} />
    <Card.Body>
      <Card.Title>Optimum Nutritio Estándar dorado</Card.Title>
      <Card.Text>
        100% Proteina de Suero de Leche en Polvo, Pie de lima.
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
  <Card>
                <Button variant="light" href='/Suplementos/Polvo_micronizado_de_creatina'>
    <Card.Img variant="top" src={Creatina} />
    <Card.Body>
      <Card.Title>Polvo micronizado de creatina</Card.Title>
      <Card.Text>
        Monohidrato de BulkSupplements, pre/posentrenamiento.
        <p>$ 59.189</p>
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
                <Button variant="light" href='/Suplementos/L-ARGININE'>
    <Card.Img variant="top" src={Larginine} />
    <Card.Body>
      <Card.Title>L-ARGININE</Card.Title>
      <Card.Text>
        Potenciador de la resistencia y la circulación con óxido nítrico.
        <p>$ 83.799</p>
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
                <Button variant="light" href='/Suplementos/Barras_de_proteina_de_suero'>
    <Card.Img variant="top" src={Gatorade} />
    <Card.Body>
      <Card.Title>Barras de proteína de suero</Card.Title>
      <Card.Text>
        Para recuperación atlética.
        <p>$ 100.298</p>
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
                <Button variant="light" href='/Suplementos/Conjunto_de_creatina_y_preentrenamiento'>
    <Card.Img variant="top" src={C4} />
    <Card.Body>
      <Card.Title>Conjunto de creatina y preentrenamiento</Card.Title>
      <Card.Text>
        Preentreno original.
        <p>$ 83.047</p>
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
  <Button variant="light" href='/Suplementos/Galleta_de_proteinas_Ques_Nutrition'>
    <Card.Img variant="top" src={Galleta} />
    <Card.Body>
      <Card.Title>Galleta de proteínas Ques Nutrition</Card.Title>
      <Card.Text>
        Aptas para la dieta Keto, rica en proteínas y baja en carbohidratos.
        <p>$ 75.134</p>
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
                <Button variant="light" href='/Suplementos/Polvo_electrolitico_DripDrop'>
    <Card.Img variant="top" src={Electrolitico} />
    <Card.Body>
      <Card.Title>Polvo electrolítico DripDrop</Card.Title>
      <Card.Text>
        Para alivio rápido de la deshidratación.
        <p>$ 63.265</p>
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
                <Button variant="light" href='/Suplementos/Isopure_zero_carb'>
    <Card.Img variant="top" src={Isopure} />
    <Card.Body>
      <Card.Title>Isopure zero carb</Card.Title>
      <Card.Text>
        Proteína sin sabor.
        <p>$ 90.960</p> 
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

export default Suplementos;
