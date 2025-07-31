import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Badge, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../utils/AuthContext';
import { categoryService } from '../services/categoryService';

const Header = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await categoryService.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>E-Commerce Store</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/products">
              <Nav.Link>All Products</Nav.Link>
            </LinkContainer>
            
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>Categories</Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map(category => (
                  <LinkContainer key={category.id} to={`/products/category/${category.id}`}>
                    <Dropdown.Item>{category.name}</Dropdown.Item>
                  </LinkContainer>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Nav>
            {isAuthenticated ? (
              <>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    Cart <Badge bg="secondary">0</Badge>
                  </Nav.Link>
                </LinkContainer>
                
                {isAdmin && (
                  <LinkContainer to="/admin">
                    <Nav.Link>Admin Panel</Nav.Link>
                  </LinkContainer>
                )}

                <Dropdown as={Nav.Item}>
                  <Dropdown.Toggle as={Nav.Link}>
                    Welcome, {user.firstName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <LinkContainer to="/profile">
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orders">
                      <Dropdown.Item>My Orders</Dropdown.Item>
                    </LinkContainer>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;