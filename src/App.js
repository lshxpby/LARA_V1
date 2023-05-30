import React from 'react'
import './app.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return(
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<ProductList />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/product" element={<Product />} />
      <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App