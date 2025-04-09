# Product Management System

A full-stack application for managing products with user authentication, filtering, and CRUD operations.

![Landing Page](https://ik.imagekit.io/kephswv3r/Screenshot%202025-04-09%20222001.png?updatedAt=1744217449230)

## Overview

This Product Management System consists of a Node.js/Express/TypeScript backend with MongoDB for data storage and a React frontend. The application allows users to register, login, and manage products with features like filtering, searching, and CRUD operations.

## Features

- **User Authentication**
  - JWT-based authentication
  - User registration and login
  - Protected routes for product management

- **Product Management**
  - Create, read, update, and delete products
  - Product details include name, description, category, price, rating, and image URL

- **Search & Filtering**
  - Filter products by category
  - Filter by price range
  - Filter by minimum rating
  - Search products by name or description

![Add Product](https://ik.imagekit.io/kephswv3r/Screenshot%202025-04-09%20222145.png?updatedAt=1744217528886)

## Tech Stack

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- JWT for authentication

### Frontend
- React with Vite
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests

## Setup and Installation

### Backend Setup
1. Clone the repository
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Create a `.env` file with the following variables:


5. Start the development server: `npm run dev`

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Create a `.env` file with:


4. Start the development server: `npm run dev`

## Deployment

The application is deployed on Vercel:
- Frontend: https://product-management-851u.vercel.app
- Backend: https://product-management-olive-phi.vercel.app

### Deployment Issues Troubleshooting

If you encounter 404 errors or CORS issues:

1. Ensure your frontend is making requests to the correct API URL with the `/api` prefix
2. Check that CORS is properly configured in the backend
3. Verify all routes are correctly defined in the backend

## API Endpoints

### Authentication
- `POST /api/users` - Register a new user
- `POST /api/users/login` - Login a user

### Products
- `GET /api/products` - Get all products (with optional filter parameters)
- `GET /api/products/:id` - Get a specific product
- `POST /api/products` - Create a new product (protected)
- `PUT /api/products/:id` - Update a product (protected)
- `DELETE /api/products/:id` - Delete a product (protected)

## Usage Flow

1. **Registration/Login**
- Users can register with email and password
- Upon successful login, a JWT token is stored for authentication

2. **Browsing Products**
- The home page displays all available products
- Users can filter products using the filter form
- Product details can be viewed by clicking on a product

3. **Managing Products** (Authenticated Users)
- Create new products using the "Add Product" form
- Edit existing products
- Delete products

## Known Issues

- The application currently has issues with the API endpoint URL in the deployed version
- CORS configuration may need adjustment for proper cross-origin requests
- 404 errors when accessing the `/products` endpoint directly instead of `/api/products`

## Future Improvements

- Add user profile management
- Implement product categories as a separate entity
- Add image upload functionality
- Implement pagination for product listing
- Add unit and integration tests
