// Email validation
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Password validation (at least 6 characters)
  export const isValidPassword = (password: string): boolean => {
    return password.length >= 6;
  };
  
  // Product validation
  export const validateProduct = (product: any): string | null => {
    if (!product.name || product.name.trim() === '') {
      return 'Product name is required';
    }
    
    if (!product.description || product.description.trim() === '') {
      return 'Product description is required';
    }
    
    if (!product.category || product.category.trim() === '') {
      return 'Product category is required';
    }
    
    if (!product.price || isNaN(product.price) || product.price < 0) {
      return 'Product price must be a positive number';
    }
    
    if (product.rating !== undefined && (isNaN(product.rating) || product.rating < 0 || product.rating > 5)) {
      return 'Product rating must be between 0 and 5';
    }
    
    return null;
  };
  