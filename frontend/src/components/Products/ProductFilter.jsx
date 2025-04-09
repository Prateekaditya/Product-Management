import { useState } from 'react';

const ProductFilter = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    search: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const processedFilters = {
      ...filters,
      minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined,
      minRating: filters.minRating ? Number(filters.minRating) : undefined
    };
    
    Object.keys(processedFilters).forEach(key => {
      if (processedFilters[key] === '' || processedFilters[key] === undefined) {
        delete processedFilters[key];
      }
    });
    
    onApplyFilters(processedFilters);
  };

  const handleReset = () => {
    setFilters({
      category: '',
      minPrice: '',
      maxPrice: '',
      minRating: '',
      search: ''
    });
    onApplyFilters({});
  };

  return (
    <div className="bg-[#4A4947] text-[#D8D2C2] h-lvh  p-4 fixed top-0 shadow mb-6 z-0">
      <div className='relative top-20'>
      <h3 className="text-lg font-semibold mb-3">Filter Products</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 mb-8 w-70">
          <div>
            <label htmlFor="search" className="block text-sm font-medium mb-1">Search</label>
            <input
              type="text"
              id="search"
              name="search"
              value={filters.search}
              onChange={handleChange}
              placeholder="Search by name or description"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={filters.category}
              onChange={handleChange}
              placeholder="Filter by category"
              className="w-full p-2 border rounded "
            />
          </div>
          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium mb-1">Min Price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="Min price"
              min="0"
              className="w-full p-2 border rounded "
            />
          </div>
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium mb-1">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="Max price"
              min="0"
              className="w-full p-2 border rounded "
            />
          </div>
          <div>
            <label htmlFor="minRating" className="block text-sm font-medium mb-1">Min Rating</label>
            <input
              type="number"
              id="minRating"
              name="minRating"
              value={filters.minRating}
              onChange={handleChange}
              placeholder="Min rating"
              min="0"
              max="5"
              step="0.1"
              className="w-full p-2 border rounded "
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button 
            type="submit" 
            className="bg-[#FAF7F0] hover:bg-[#D8D2C2] text-[#4A4947] px-4 py-2 rounded transition"
          >
            Apply Filters
          </button>
          <button 
            type="button" 
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
          >
            Reset Filters
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ProductFilter;
