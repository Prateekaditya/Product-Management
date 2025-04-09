import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import { notFound, errorHandler } from './utils/helpers';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Update CORS configuration
app.use(cors({
  origin: ['https://product-management-851u.vercel.app/', 'http://localhost:5173'],
  credentials: true
}));app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

  

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
