import React from 'react';
import './Body.css';
import { Card, CardGroup, Button } from 'react-bootstrap';
import Bandas from '../Img/bandas-de-resistencia.jpg';
import Mancuernas from '../Img/kit-de-mancuernas-1.jpg';
import Proteina from '../Img/Proteina.jpg';

export const Body = () => {
  return (
    <div>
    <h3 className='titulo'>LO MÁS VENDIDO</h3>
        <CardGroup className='Cards'>
  <Card className='card'>
    
  <Button variant="light" href='/Calistenia/Bandas_resistencia'>
    <Card.Img variant="top" src={Bandas} />
    <Card.Body>
      <Card.Title>Set de bandas de resistencia</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Button variant="link" href=''>Ver más</Button>
      </small>
    </Card.Footer>
    </Button>{' '}
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
  <Card className='card'>
    <Card.Img className='Proteina' variant="top" src={Proteina} />
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
  </Card>
</CardGroup>
    </div>
  );
};

export default Body;