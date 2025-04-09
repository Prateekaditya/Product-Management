// productController.ts
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel';

// @desc    Create a product
// @route   POST /api/products
// @access  Private
const createProduct = asyncHandler(async (req: Request, res: Response) => {
  const { name, description, category, price, rating, imageUrl } = req.body;
  
  if (!imageUrl) {
    res.status(400);
    throw new Error('Please provide an image URL');
  }

  const product = await Product.create({
    name,
    description,
    category,
    price,
    rating,
    imageUrl,
    cloudinaryId: 'direct_url' // Using a placeholder since we're not using Cloudinary
  });

  res.status(201).json(product);
});

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const { category, minPrice, maxPrice, minRating, search } = req.query;
  
  let query: any = {};
  
  // Filter by category
  if (category) {
    query.category = category;
  }
  
  // Filter by price range
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }
  
  // Filter by rating
  if (minRating) {
    query.rating = { $gte: Number(minRating) };
  }
  
  // Search by name or description
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }
  
  const products = await Product.find(query);
  res.json(products);
});

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = asyncHandler(async (req: Request, res: Response) => {
  const { name, description, category, price, rating, imageUrl } = req.body;
  
  const product = await Product.findById(req.params.id);
  
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  
  // Update fields
  product.name = name || product.name;
  product.description = description || product.description;
  product.category = category || product.category;
  product.price = price !== undefined ? price : product.price;
  product.rating = rating !== undefined ? rating : product.rating;
  product.imageUrl = imageUrl || product.imageUrl;
  
  const updatedProduct = await product.save();
  res.json(updatedProduct);
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private
const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  
  await product.deleteOne();
  res.json({ message: 'Product removed' });
});

export {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
