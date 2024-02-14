import React from 'react';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import SideMenu from './components/SideMenu';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import ProductsByCategory from './pages/ProductsByCategory';
function App() {
  return (
    <>
    <div className="App">
      <div className="container-fluid">
      <Header />
      {/* <SideMenu /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/products/category/:categoryName' element={<ProductsByCategory />} />
        
      </Routes>


    </div>
      </div>
    </>
  );
}

export default App;
