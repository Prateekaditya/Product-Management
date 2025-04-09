import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
const ProductItem = ({ product }) => {
  return (
    <div className="border rounded p-6 w-120 h-140 relative top-5 ">
      <img src={product.imageUrl} alt={product.name} className='w-100 h-80'/>
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="mb-2">{product.description}</p>
      <div className='flex flex-row justify-between'>
      <p className="mb-2"><span className='font-bold'>Price:  </span>₹{product.price}</p>
      <p className="mb-2"><span className='font-bold'>Category:</span> {product.category}</p>
      </div>
      <div className=' flex gap-3 items-center'>
      <p className="mb-2"><span className='font-bold'>Rating: </span>{product.rating}</p>
      <FaStar className='text-[#FF5733] w-5 h-5 mb-2'/>
      </div>
      <Link to={`/products/${product._id}`} className=" text-[#B17457] font-medium hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default ProductItem;
