import { Container, Row, Col,  Button } from 'react-bootstrap';
import StaticNavBar from '../../components/staticNavBar/StaticNavBar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { request } from '../../utils/AxiosHelper'

import classes from '../../components/howItWorksBlock/HowItWorksBlock';
import main from './ProductPage.module.css'

function ProductPage() {
  const mainColor = '#008000';

  const cardStyle = {
    background: `radial-gradient(circle, ${mainColor}, transparent)`,
    border: `1px solid ${mainColor}`,
  };

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductData = async () => {
    try {
      const response = await request('GET', `/products/details/${id}`);
      console.log('Response:', response);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  
  useEffect(() => {
    fetchProductData();
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { imageUrl, name, description, price } = product;

  return (
    <div>
        <StaticNavBar/>
    <Container className={`my-10 ${main.productPage}`} id="product_page">  
      <Row>
        <Col lg={6} className={`p-4 ${main.productCard}`} style={cardStyle}>
          <img
            src={imageUrl}
            alt={name}
            className={`image-fluid ${main.productImage}`}
          />
        </Col>
        <Col lg={6} className={main.productDetails}>
          <h2 className={`${classes.title} mb-4`}>{name}</h2>
          <p>{description}</p>
          <p>{price} EUR</p>
          <Button variant="success">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </div>
  );
}

export default ProductPage;