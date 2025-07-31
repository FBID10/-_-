import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/productService';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const products = await productService.getAvailableProducts();
      // Get first 6 products as featured
      setFeaturedProducts(products.slice(0, 6));
    } catch (error) {
      console.error('Error fetching featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Carousel */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center bg-primary text-white" style={{height: '400px'}}>
            <div className="text-center">
              <h1>Welcome to E-Commerce Store</h1>
              <p className="lead">Discover amazing products at great prices</p>
              <Button variant="light" size="lg" onClick={() => navigate('/products')}>
                Shop Now
              </Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center bg-success text-white" style={{height: '400px'}}>
            <div className="text-center">
              <h1>Special Offers</h1>
              <p className="lead">Up to 50% off on selected items</p>
              <Button variant="light" size="lg" onClick={() => navigate('/products')}>
                View Deals
              </Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center bg-info text-white" style={{height: '400px'}}>
            <div className="text-center">
              <h1>New Arrivals</h1>
              <p className="lead">Check out our latest products</p>
              <Button variant="light" size="lg" onClick={() => navigate('/products')}>
                Explore
              </Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Container>
        {/* Featured Products Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Featured Products</h2>
            {loading ? (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <Row>
                {featuredProducts.map(product => (
                  <Col md={4} sm={6} className="mb-4" key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            )}
            <div className="text-center mt-4">
              <Button variant="primary" onClick={() => navigate('/products')}>
                View All Products
              </Button>
            </div>
          </Col>
        </Row>

        {/* Categories Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Shop by Category</h2>
            <Row>
              <Col md={3} sm={6} className="text-center mb-3">
                <div className="bg-light p-4 rounded">
                  <h5>Electronics</h5>
                  <p>Latest gadgets and devices</p>
                  <Button variant="outline-primary">Shop Now</Button>
                </div>
              </Col>
              <Col md={3} sm={6} className="text-center mb-3">
                <div className="bg-light p-4 rounded">
                  <h5>Clothing</h5>
                  <p>Fashion for everyone</p>
                  <Button variant="outline-primary">Shop Now</Button>
                </div>
              </Col>
              <Col md={3} sm={6} className="text-center mb-3">
                <div className="bg-light p-4 rounded">
                  <h5>Books</h5>
                  <p>Knowledge and entertainment</p>
                  <Button variant="outline-primary">Shop Now</Button>
                </div>
              </Col>
              <Col md={3} sm={6} className="text-center mb-3">
                <div className="bg-light p-4 rounded">
                  <h5>Home & Garden</h5>
                  <p>Make your space beautiful</p>
                  <Button variant="outline-primary">Shop Now</Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;