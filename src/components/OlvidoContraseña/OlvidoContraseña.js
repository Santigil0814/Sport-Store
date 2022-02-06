import { React, useState } from 'react';
import './OlvidoContraseña.css';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Barra from '../Navbar/Navbar';

function OlvidoContrasena() {
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
      <div className='ContOlv'>
        <div className='caja'>
          <h1>RECUPERAR CONTRASEÑA.</h1>
          <p>Digite su correo registrado, al cual se le enviara una contraseña temporal.</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
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
              </Row>
              <Button variant="outline-secondary" type="submit">Recuperar.</Button>{' '}
              <Button variant="outline-secondary" href='/InicioSesion'>Regresar. </Button>{' '}
            </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OlvidoContrasena;
