import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchProductById } from "./Api";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error en detallles personaje", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <Row className="w-100 py-5">
          <Col>
            <Card className="my-4">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={product.image}
              />
            </Card>
          </Col>
          <Col>
            <Card className="my-4">
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Card.Title className="my-4 text-truncate">
                    {product.productName}
                  </Card.Title>
                  <span className="badge bg-danger">New</span>
                </div>
                <Card.Text className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum id, voluptate necessitatibus ex eius sunt!
                </Card.Text>
                <Card.Subtitle className="m-4 text-muted">
            Stock:  {product.stock}
          </Card.Subtitle>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 ms-4 fs-6 text-secondary">${product.price}</p>
                  <Link
                    to="/product/confirm/"
                    className="btn-gray text-decoration-none text-center"
                  >
                    Buy
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetails;
