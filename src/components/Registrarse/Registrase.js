import { React, useState } from 'react';
import Barra from '../Navbar/Navbar';
import './Registrase.css'
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function Registrarse() {
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
            <div className='FondoRegistro'>
                <div className='contornoRegistro'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <h1>REGISTRATE</h1>
          <h4>Tú nombre</h4>
          <Form.Control
            required
            type="text"
            placeholder="Nombre*"
            defaultValue=""
          />
          <Form.Control.Feedback>Muy bien!</Form.Control.Feedback>
        </Form.Group>
        <p></p>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Apellido*"
            defaultValue=""
          />
          <Form.Control.Feedback>Muy bien!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername"> 
        <p></p>
        <h4>Fecha de nacimineto</h4>
          <InputGroup hasValidation>
            <Form.Control
              type="date"
              placeholder="Fecha de nacimiento"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor coloque su fecha de nacimiento.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group><Form>
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-12">
    <h4>Sexo</h4>
      <Form.Check
        inline
        label="Hombre"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Mujer"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        label="Otros"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form>
        <Form.Group as={Col} md="12" controlId="validationCustom03">
        <h4>Datos de acceso</h4>
          <Form.Control type="email" placeholder="Correo*" required />
          <Form.Control.Feedback type="invalid">
            Por favor digite un correo valido.
          </Form.Control.Feedback>
        </Form.Group>
        <p></p>
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Control type="password" placeholder="Contraseña*" required />
          <Form.Control.Feedback type="invalid">
          Debes utilizar como mínimo 8 caracteres, incluyendo un número, mayúsculas y minúsculas.
          </Form.Control.Feedback>
        </Form.Group>
        <p></p>
      <Form.Group className="mb-12">
        <Form.Check
          label="Me gustaría recibir noticias sobre productos y servicios de SportStore.
          Consiento recibir mensajes de marketing personalizados por correo electrónico
          de SportSotre."
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Form.Group className="mb-12">
        <Form.Check
          required
          label="He leido y acepto los terminos y condiciones de SportStore."
          feedback="Por favor acepte nuestros terminos y condiciones."
          feedbackType="invalid"
        />
      </Form.Group>
      <p></p>
      <Button variant="outline-secondary" type="submit">Registrarme</Button>
    </Form>
      </div>
      </div>
      <Footer />
      </div>
    );
  }

export default Registrarse;