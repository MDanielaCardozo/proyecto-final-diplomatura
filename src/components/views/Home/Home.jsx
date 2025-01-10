import CarouselHome from "./Carousel/CarouselHome";
import { Container, Row} from "react-bootstrap";
import CardProduct from "./CardProduct/CardProduct";
import { useState, useEffect } from "react";
import { fetchProducts } from "../Product/Api";

function Home() {

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const BASE_URL = import.meta.env.VITE_API_MUEBLERIA;

    useEffect(() => {
      const fetchApi = async () => {
        try {
          const data = await fetchProducts(BASE_URL);
          setListProducts(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
    };

    fetchApi();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {

  return (
    <div className="bg-dark">
      <CarouselHome></CarouselHome>
      <Container className="pb-5 text-white">
        <h1 className="py-5">Products</h1>
        <hr className="p-5" />
        <Row className="w-100">
            {listProducts.map((product) => (<CardProduct key={product.id} product={product}></CardProduct>))}
        </Row>
      </Container>
    </div>
  );
}
}

export default Home;
