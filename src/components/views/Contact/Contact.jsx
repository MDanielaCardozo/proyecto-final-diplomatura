import { Container,Col, Row } from "react-bootstrap";
import "./Contact.css";

function Contact() {
    return (
       <div className="bg-dark">
       <Container className="py-5 text-white">
              <h1 className="py-4">Contactanos</h1>
              <hr />
              <Row className="w-100 mt-5">
            <Col sm={12} md={4} lg={4} >
              <div className="cardInfo w-100 p-2">
                <h3>Email</h3>
                <p className="m-3">
                  artdeco@artdeco.com
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
            <div className="cardInfo w-100 p-2">
                <h3>Teléfono</h3>
                <p className="m-3">
                Mobile: (0381) 123 456 789
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
            <div className="cardInfo w-100 p-2">
                <h3>Horarios</h3>
                <p className="m-3">
                  Disponible de 10am-8pm
                </p>
              </div>
            </Col>
          </Row>
       </Container>
       </div>
    );
}

export default Contact;