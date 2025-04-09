// productModel.ts
import mongoose, { Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  cloudinaryId: string;
}

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0
    },
    imageUrl: {
      type: String,
      required: true
    },
    cloudinaryId: {
      type: String,
      required: true,
      default: 'direct_url'
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;
