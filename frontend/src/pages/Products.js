import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/productService';
import { categoryService } from '../services/categoryService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { categoryId } = useParams();

  useEffect(() => {
    fetchCategories();
    if (categoryId) {
      setSelectedCategory(categoryId);
      fetchProductsByCategory(categoryId);
    } else {
      fetchAllProducts();
    }
  }, [categoryId]);

  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (catId) => {
    try {
      setLoading(true);
      const data = await productService.getProductsByCategory(catId);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products by category:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await categoryService.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      try {
        setLoading(true);
        const data = await productService.searchProducts(searchTerm);
        setProducts(data);
        setSelectedCategory('');
      } catch (error) {
        console.error('Error searching products:', error);
      } finally {
        setLoading(false);
      }
    } else {
      fetchAllProducts();
    }
  };

  const handleCategoryChange = (e) => {
    const catId = e.target.value;
    setSelectedCategory(catId);
    if (catId) {
      fetchProductsByCategory(catId);
    } else {
      fetchAllProducts();
    }
    setSearchTerm('');
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    fetchAllProducts();
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>Products</h1>
        </Col>
      </Row>

      {/* Search and Filter Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Form onSubmit={handleSearch}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
        </Col>
        <Col md={4}>
          <Form.Select
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Button variant="outline-secondary" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        </Col>
      </Row>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Row className="mb-3">
            <Col>
              <p className="text-muted">
                {products.length} product{products.length !== 1 ? 's' : ''} found
                {selectedCategory && (
                  <span> in {categories.find(c => c.id === parseInt(selectedCategory))?.name}</span>
                )}
                {searchTerm && <span> for "{searchTerm}"</span>}
              </p>
            </Col>
          </Row>
          
          {products.length === 0 ? (
            <Row>
              <Col className="text-center">
                <h4>No products found</h4>
                <p>Try adjusting your search criteria or clear the filters.</p>
              </Col>
            </Row>
          ) : (
            <Row>
              {products.map(product => (
                <Col md={4} sm={6} className="mb-4" key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default Products;