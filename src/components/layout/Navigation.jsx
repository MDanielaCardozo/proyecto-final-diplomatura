import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/art-deco-logo.png';
import './Navigation.css';

function Navigation({ logged, setLogged }) {
  const navigation = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('userKey');
    setLogged('');
    navigation('/');
  };

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
            <Link to={"/"} className='fontNav'>Home</Link>
            <Link to={"/about"} className='fontNav'>Nosotros</Link>
            <Link to={"/contact"} className='fontNav'>Contacto</Link>
            <Link to={"/registro"} className='fontNav'>Registrarse</Link>
            <Link to={"/login"} className='fontIcon'><i className="bi bi-person"></i></Link>
          </Nav>
          
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default Navigation;
