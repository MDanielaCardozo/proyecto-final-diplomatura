import CarouselHome from "./Carousel/CarouselHome";
import { Container, Row, Col } from "react-bootstrap";
import CardProduct from "./CardProduct/CardProduct";

function Home() {
    return (
        <div className="bg-dark">
            <CarouselHome></CarouselHome>
            <Container className="py-5 text-white ">
                <h1 className="py-5">Products</h1>
                <hr className="p-5"/>

                <Row className="py-5">
                    <Col>
                        <CardProduct></CardProduct>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;