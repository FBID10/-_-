# E-Commerce Website

A full-stack e-commerce website built with React frontend, Spring Boot backend, and MySQL database.

## Features

### Customer Features
- User registration and authentication
- Browse products by category
- Search products
- Product catalog with detailed information
- Shopping cart (basic implementation)
- Responsive design with Bootstrap

### Admin Features
- Admin panel with authentication
- Product management (CRUD operations)
- Category management (CRUD operations)
- Stock management
- User management

## Technology Stack

### Backend
- **Java 17**
- **Spring Boot 3.2.0**
- **Spring Security** (JWT authentication)
- **Spring Data JPA**
- **MySQL 8.0**
- **Maven**

### Frontend
- **React 18**
- **React Router DOM**
- **Bootstrap 5**
- **Axios** (API communication)

## Setup Instructions

### Prerequisites
- Java 17 or higher
- Node.js 16 or higher
- MySQL 8.0
- Maven 3.6+

### Database Setup
1. Install MySQL and start the service
2. Create a database named `ecommerce_db`:
   ```sql
   CREATE DATABASE ecommerce_db;
   ```
3. Update database credentials in `src/main/resources/application.properties` if needed

### Backend Setup
1. Navigate to the project root directory
2. Install dependencies and run the application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
3. The backend will start on `http://localhost:8080`
4. Sample data will be automatically loaded

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The frontend will start on `http://localhost:3000`

## Default Accounts

### Admin Account
- **Email:** admin@ecommerce.com
- **Password:** admin123

### User Account
- **Email:** john.doe@email.com
- **Password:** user123

## API Endpoints

### Authentication
- `POST /api/auth/signin` - User login
- `POST /api/auth/signup` - User registration

### Products (Public)
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/category/{categoryId}` - Get products by category
- `GET /api/products/search?name={name}` - Search products

### Categories (Public)
- `GET /api/categories` - Get all categories
- `GET /api/categories/{id}` - Get category by ID

### Admin (Requires ADMIN role)
- `POST /admin/products` - Create product
- `PUT /admin/products/{id}` - Update product
- `DELETE /admin/products/{id}` - Delete product
- `POST /admin/categories` - Create category
- `PUT /admin/categories/{id}` - Update category
- `DELETE /admin/categories/{id}` - Delete category

## Project Structure

```
├── src/main/java/com/ecommerce/
│   ├── config/          # Security and JWT configuration
│   ├── controller/      # REST controllers
│   ├── dto/            # Data transfer objects
│   ├── model/          # JPA entities
│   ├── repository/     # Data repositories
│   └── service/        # Business logic
├── src/main/resources/
│   ├── application.properties
│   └── data.sql        # Sample data
└── frontend/
    ├── public/
    └── src/
        ├── components/ # Reusable components
        ├── pages/     # Main pages
        ├── services/  # API services
        └── utils/     # Utilities and context
```

## Screenshots

(Add screenshots of your application here when running)

## Future Enhancements

- Complete shopping cart functionality
- Order management system
- Payment integration
- Email notifications
- Product reviews and ratings
- Inventory tracking
- Advanced search and filtering
- User profile management
- Order history

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.