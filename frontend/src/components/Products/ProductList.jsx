import { useEffect, useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { getProducts } from '../../services/productService';
import ProductItem from './ProductItem';
import ProductFilter from './ProductFilter';

const ProductList = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts(activeFilters);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts, activeFilters]);

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);
  };

  return (
    <>
    <div className='flex box-border gap-5 '>
    <div className='bg-[#4A4947]'>
    <ProductFilter onApplyFilters={handleApplyFilters} />

    </div>
    <div className="container mx-auto mt-8 ml-80 ">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : products.length === 0 ? (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p>No products found. Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {products.map(product => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default ProductList;
