import { Form, Container, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="bg-dark text-white">
      <Container className="py-5">
        <h1>Registrarse</h1>
        <hr />
        <Form className="my-5 text-start">
          <Form.Group className="mb-5" controlId="formBasicUserName">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control type="text" placeholder="Ej: John Doe" name="name" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="johndoe@gmail.com"
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ej: Ingrese su password"
              name="password"
            />
          </Form.Group>
          <Link to="/login" className="btn-primary text-decoration-none">
            Back to login
          </Link>
          <div className="text-center my-4">
            <Button type="submit" variant="secondary" className="w-100">
              Send
            </Button>
          </div>
        </Form>
        {error ? (
          <Alert variant="danger" onClick={() => setError(false)} dismissible>
            {errorMessage}
          </Alert>
        ) : null}
      </Container>
    </div>
  );
}

export default Register;
