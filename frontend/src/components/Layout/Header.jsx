import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { logout } from '../../services/authService';

const Header = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <header className="bg-[#4A4947] text-[#D8D2C2] p-6 z-1 fixed w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Product Management</Link>
        <nav>
          {user ? (
            <>
              <button className='bg-[#FAF7F0]  text-[#4A4947] rounded-2xl p-1.5 w-35 hover:scale-110 duration-200 mr-5 bg-center'><Link to="/products/new" className=" ">Add Product</Link></button>
              <button className='hover:scale-110 duration-200' onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className='bg-[#FAF7F0]  text-[#4A4947] rounded-2xl p-1.5 w-35 hover:scale-110 duration-200 mr-5 bg-center'><Link to="/login" className="mr-4">Login</Link></button>
              <button className='bg-[#FAF7F0]  text-[#4A4947] rounded-2xl p-1.5 w-35 hover:scale-110 duration-200 mr-5 bg-center'><Link to="/register">Register</Link></button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
