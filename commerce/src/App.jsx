import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopcategory from './pages/Shopcategory';
import Shop from "./pages/Shop";
import Product from "./pages/Product"; 
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Hero from './components/Hero/Hero';
import Footer from "./components/Footer/Footer";
import men_banner from './components/Assets/banner_mens.png'
import Women_banner from './components/Assets/banner_women.png'
// import Kids from './components/Assets/Kids.png' // Potential error here

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Men" element={<Shopcategory banner={men_banner} category="Men" />} />
          <Route path="/Women" element={<Shopcategory banner={Women_banner} category="Women" />} />
          {/* <Route path="/Kids" element={<Shopcategory banner={Kids} category="Kids" />} />  */}
          <Route path="/product/:productId" element={<Product />} />  
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/> 
      </BrowserRouter >
    </div>
  )
}

export default App;
