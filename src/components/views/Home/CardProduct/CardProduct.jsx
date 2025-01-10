import Card from "react-bootstrap/Card";
import { Col,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardProduct.css";

function CardProduct({ product }) {
  return (
    <Col lg={3} md={4} sm={12} className="mb-4 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card>
          <div className="w-100 object-fit-cover">
            <img src={product.image} alt={product.productName} className="w-100 cardImg" />
          </div>
          </Card>
        <Card.Body>
          <Card.Title>
            <h5>{product.productName}</h5>
          </Card.Title>
          <Card.Subtitle className="m-4 text-muted">
            $ {product.price}
          </Card.Subtitle>
          <Card.Footer className="text-end">
            <Link to={`/productDetail/${product.id}`}>Ver más</Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardProduct;
