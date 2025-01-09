import { Carousel } from "react-bootstrap";
import CarouselUno from "../../../../assets/img/carousel-uno.jpg";
import CarouselDos from "../../../../assets/img/carousel-dos.jpg";
import CarouselTres from "../../../../assets/img/carousel-tres.jpg";

function CarouselHome() {
  return (
    <div className="container py-5">
      <Carousel className="carousel-fade"> 
        <Carousel.Item>
          <img src={CarouselUno} alt="Portada carousel uno" className="d-block w-100" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Step into the Future of Lighting with Bright Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={CarouselDos} alt="Portada carousel dos" className="w-100" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={CarouselTres} alt="Portada carousel tres" className="w-100" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
