import { React, useState } from 'react';
import './InicioSesion.css';
import Barra from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Form, Button, Col, Row, Container, InputGroup } from 'react-bootstrap';

function InicioSesion() {
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
    <div className='FondoInicioSe'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Container>
      <Row className="mb-3">
      <Col sm={6}>
        <h1>INICIAR SESIÓN</h1>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Correo</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor digite un correo valido.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="" required />
          <Form.Control.Feedback type="invalid">
            Por favor digite su contraseña.
          </Form.Control.Feedback>
        </Form.Group>
        <p></p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recordarme" />
  </Form.Group>
  <Button variant="outline-secondary" type="submit">Ingresar</Button>{' '}
  <p></p>
  <a href="/OlvidoContrasena">¿Olvido su contraseña?</a>
        </Col>
        <Col sm={6}>
    <h1>REGISTRATE Y DISFRUTA DE LOS BENEFICIOS QUE TIENE.</h1>
    <p>Recibe notificaciones de nuevos productos.</p>
    <p>Recibe ofertas especiales.</p>
    <p className='ultParrafo'>Cupon de 50% por ser nuevo usuario.</p>
    <Button variant="outline-secondary" href='/Registrarse'>Registrarme</Button>{' '}
</Col>
      </Row>
      </Container>
    </Form>
    </div>
    <Footer />
    </div>
  );
}

export default InicioSesion;
