import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import { notFound, errorHandler } from './utils/helpers';

dotenv.config();
connectDB();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Update CORS configuration
app.use(cors({
  origin: "https://product-management-851u.vercel.app",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.get('/test', (req, res) => {
  res.json({ message: 'CORS is working' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
