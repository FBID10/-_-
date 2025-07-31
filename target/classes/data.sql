-- Insert sample categories
INSERT INTO categories (name, description, created_at) VALUES 
('Electronics', 'Electronic devices and gadgets', NOW()),
('Clothing', 'Fashion and apparel', NOW()),
('Books', 'Books and literature', NOW()),
('Home & Garden', 'Home improvement and garden supplies', NOW());

-- Insert sample products
INSERT INTO products (name, description, price, stock_quantity, image_url, category_id, created_at) VALUES 
('iPhone 14', 'Latest Apple smartphone with advanced features', 999.99, 50, 'https://via.placeholder.com/300x300?text=iPhone+14', 1, NOW()),
('Samsung Galaxy S23', 'High-performance Android smartphone', 899.99, 75, 'https://via.placeholder.com/300x300?text=Galaxy+S23', 1, NOW()),
('MacBook Pro', 'Powerful laptop for professionals', 1999.99, 25, 'https://via.placeholder.com/300x300?text=MacBook+Pro', 1, NOW()),
('Nike Air Max', 'Comfortable running shoes', 129.99, 100, 'https://via.placeholder.com/300x300?text=Nike+Air+Max', 2, NOW()),
('Levi''s Jeans', 'Classic denim jeans', 79.99, 200, 'https://via.placeholder.com/300x300?text=Levis+Jeans', 2, NOW()),
('T-Shirt', 'Casual cotton t-shirt', 19.99, 300, 'https://via.placeholder.com/300x300?text=T-Shirt', 2, NOW()),
('The Great Gatsby', 'Classic American novel', 12.99, 150, 'https://via.placeholder.com/300x300?text=Great+Gatsby', 3, NOW()),
('Coffee Maker', 'Automatic drip coffee maker', 89.99, 40, 'https://via.placeholder.com/300x300?text=Coffee+Maker', 4, NOW());

-- Insert admin user (password: admin123)
INSERT INTO users (first_name, last_name, email, password, role, address, phone, created_at) VALUES 
('Admin', 'User', 'admin@ecommerce.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ADMIN', '123 Admin St', '+1234567890', NOW());

-- Insert sample user (password: user123)
INSERT INTO users (first_name, last_name, email, password, role, address, phone, created_at) VALUES 
('John', 'Doe', 'john.doe@email.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'USER', '456 User Ave', '+1987654321', NOW());