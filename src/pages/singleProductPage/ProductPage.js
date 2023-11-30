import { Container, Row, Col,  Button } from 'react-bootstrap';
import StaticNavBar from '../../components/staticNavBar/StaticNavBar';
import AddReviewModal from './AddReviewModal';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { request } from '../../utils/AxiosHelper'

import classes from '../../components/howItWorksBlock/HowItWorksBlock';
import main from './ProductPage.module.css'

import AuthService from "../../services/AuthService";
import axios from "axios";


function ProductPage() {
  const mainColor = '#008000';

  const cardStyle = {
    background: `radial-gradient(circle, ${mainColor}, transparent)`,
    border: `1px solid ${mainColor}`,
  };

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);

  const fetchProductData = async () => {
    try {
      const response = await request('GET', `/products/details/${id}`);
      console.log('Response:', response);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const openReviewModal = () => {
    setReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setReviewModalOpen(false);
  };

  // Profile
  const currentUser = AuthService.getCurrentUser();

  const handleSaveReview = async (reviewData) => {
    try {

      const token = currentUser?.accessToken;

      const dataToSend = {
        reviewComment: reviewData.reviewComment || '',
        rating: reviewData.rating || '1',
        product: product.id
      };

      const response = await axios.post(`http://localhost:8080/api/v1/reviews/${id}/add`, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Review added:', response);
      // Optionally, you can update the UI or perform other actions after a successful review submission
    } catch (error) {
      console.error('Error adding review:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  
  useEffect(() => {
    fetchProductData();
  }, [id]);

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
          <Button variant="primary" className={`${main.reviewButton} mt-6`} onClick={openReviewModal}>
              Add a Review
          </Button>
        </Col>
      </Row>
    </Container>
    <Footer/>

    {/* Review Modal */}
    <AddReviewModal isOpen={isReviewModalOpen} onClose={closeReviewModal} onSave={handleSaveReview} />
    </div>
  );
}

export default ProductPage;