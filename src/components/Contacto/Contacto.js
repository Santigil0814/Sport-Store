import { React, useState} from 'react';
import './Contacto.css';
import Barra from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Form, Row, Col, InputGroup, Button, Container } from 'react-bootstrap';

function Contacto() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
      
  <div className='Fondo-app'>
          <Barra />
        <div className='FondoContact'>
          <div className='ContornoContact'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Container>
    <h1>Contactenos</h1>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
              Por favor indiquenos su nombre.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder=""
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
              Por favor indiquenos un correo valido para poder ponernos en contacto con usted.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Teléfono</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor digite su número de teléfono.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Asunto</Form.Label>
          <Form.Control type="text" placeholder="" required />
          <Form.Control.Feedback type="invalid">
            Digite el asunto.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control type="text" placeholder="" required />
          <Form.Control.Feedback type="invalid">
            Digite su PQRS.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
      <Button variant="outline-secondary" type="submit">Enviar</Button>
      </Container>
    </Form>
    </div>
        </div>
        <Footer />
    </div>
  );
};

export default Contacto;
