import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
        } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import ProductsDetail from './components/ProductsDetail';
import NotFound from './components/NotFound';
import ProductsIndex from './components/ProductsIndex';


function App() {
  return (
    <div>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Products />}> 
          <Route path="/" element={<ProductsIndex />} />
          <Route path=":productID" element={<ProductsDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
