import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById, deleteProduct } from '../../services/productService';
import { AuthContext } from '../../context/AuthContext';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        navigate('/');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <div className="mb-4">
          <img 
            src={product.imageUrl || 'https://via.placeholder.com/400x300'} 
            alt={product.name} 
            className="w-full h-64 object-cover rounded"
          />
        </div>
        <p className="mb-4">{product.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <strong>Price:</strong> ${product.price}
          </div>
          <div>
            <strong>Category:</strong> {product.category}
          </div>
          <div>
            <strong>Rating:</strong> {product.rating}/5
          </div>
        </div>
        {user && (
          <div className="flex gap-2">
            <Link 
              to={`/products/edit/${product._id}`} 
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </Link>
            <button 
              onClick={handleDelete} 
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        )}
        <Link to="/" className="inline-block mt-4 text-blue-600 hover:underline">
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
