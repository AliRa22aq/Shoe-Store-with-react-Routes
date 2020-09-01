import React from 'react';
import './App.css';
import {
  Routes,
  Route
        } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import ProductsDetail from './components/ProductsDetail';
import NotFound from './components/NotFound';
import ProductsIndex from './components/ProductsIndex';
import About from './components/About';
import Case1 from './components/Case1';
import Case2 from './components/Case2';
import Case3 from './components/Case3';
import Case4 from './components/Case4';



function App() {
  return (
    <div>
      <Header />
      
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Products />}> 
           <Route path="/" element={<ProductsIndex />} /> 
           <Route path="/Case1" element={<Case1 />} />
           <Route path="/Case2" element={<Case2 />} />
           <Route path="/Case3" element={<Case3 />} />
           <Route path="/Case4" element={<Case4 />} />
        </Route>
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
