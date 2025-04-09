import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import ProductForm from './components/Products/ProductForm';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container  ">
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/products/new" element={<ProductForm />} />
                <Route path="/products/edit/:id" element={<ProductForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
