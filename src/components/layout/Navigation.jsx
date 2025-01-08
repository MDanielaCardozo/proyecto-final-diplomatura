import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/art-deco-logo.png';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Link to={"/"} className="navbar-brand">
        <img src={logo} alt="Logo Art Deco" width={190}/>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to={"/"} className='fontNav'>Home</Nav.Link>
            <Nav.Link to={"/about"} className='fontNav'>Nosotros</Nav.Link>
            <Nav.Link to={"/contact"} className='fontNav'>Contacto</Nav.Link>
            <Nav.Link to={"/registro"} className='fontNav'>Registrarse</Nav.Link>
            <Nav.Link to={"/login"} className='fontIcon'><i className="bi bi-person"></i></Nav.Link>
          </Nav>
          
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default Navigation;
