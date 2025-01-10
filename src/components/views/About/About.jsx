import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import Daniela from "../../../assets/img/dani-dev-uno.webp";

function About() {
  return (
    <div className="bg-dark">
      <Container className="py-5 text-white">
        <div className="py-5">
          <h1>Nosotros</h1>
          <hr />
        </div>

        <Row className="w-100">
          <Col sm={12} md={6} lg={4} className="">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <div className="equipo">
                <div className="image">
                  <img src={Daniela} alt="equipo" className="imgEquipo" />
                  <div className="content">
                    {/* <FontAwesomeIcon icon={faLinkedin} className="text-white fs-1"/> */}
                  </div>
                </div>
              </div>
            </a>
          </Col>
          <Col sm={12} md={6} lg={6} className="mt-5">
            <h4 className="text-center text-white ">Daniela Cardozo</h4>
            <h6 className="text-center text-white">FullStack Developer</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
