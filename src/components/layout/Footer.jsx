import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Logo from "../../assets/img/art-deco-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid bg-dark footer">
      <Container className="py-5">
        <Row className="d-flex justify-content-between">
          <Col
            sm={12}
            md={4}
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/">
              <img
                alt="Logo Art Deco"
                src={Logo}
                width="200px"
                className="logoFooter"
              />
            </Link>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Link
              to="/about"
              className="text-decoration-none text-bg-dark fontFooter"
            >
              Nosotros
            </Link>
            <Link to="/contact" className="text-decoration-none fontFooter">
              Contacto
            </Link>

            <Link to="/register" className="text-decoration-none fontFooter">
              Registrarse
            </Link>
          </Col>
          <Col sm={12} md={4} lg={4} className="d-flex justify-content-center align-items-center">
            <Link
              to="/about"
              className="text-decoration-none text-bg-dark fontFooter"
            >
              <i className="bi bi-whatsapp"></i>
            </Link>
            <Link to="/contact" className="text-decoration-none fontFooter">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="/register" className="text-decoration-none fontFooter">
            <i className="bi bi-twitter-x"></i>
            </Link>
            <Link to="/register" className="text-decoration-none fontFooter">
            <i className="bi bi-tiktok"></i>
            </Link>
          </Col>
        </Row>
        <hr className="text-white"/>
        <div
        className="d-flex justify-content-between p-4 text-white fontFooter "
      >
        <p>© Todos los derechos reservados.</p>
        <p>Diseñado & Desarrollado por Daniela Cardozo</p>
      </div>
      </Container>
    </div>
  );
}

export default Footer;
