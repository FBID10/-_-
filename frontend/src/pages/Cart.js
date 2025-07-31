import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-4">Shopping Cart</h1>
          <Card>
            <Card.Body className="text-center py-5">
              <h4>Your cart is empty</h4>
              <p className="text-muted">Add some products to your cart to see them here.</p>
              <Button variant="primary" href="/products">
                Continue Shopping
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;