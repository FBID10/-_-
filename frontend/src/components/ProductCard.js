import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log('Adding to cart:', product.id);
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={product.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h6">{product.name}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">
          {product.description ? product.description.substring(0, 100) + '...' : 'No description available'}
        </Card.Text>
        <div className="mb-2">
          <Badge bg={product.stockQuantity > 0 ? 'success' : 'danger'}>
            {product.stockQuantity > 0 ? `${product.stockQuantity} in stock` : 'Out of stock'}
          </Badge>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <h5 className="text-primary mb-0">${product.price}</h5>
          <div>
            <Button 
              variant="outline-primary" 
              size="sm" 
              className="me-2"
              onClick={handleViewProduct}
            >
              View
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              disabled={product.stockQuantity === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;