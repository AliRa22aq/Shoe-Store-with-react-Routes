import React from 'react';
import './App.css';
import {
  Routes,
  Route
        } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';

import ProductsDetail1 from './components/ProductsDetail1';
import ProductsDetail2 from './components/ProductsDetail2';
import ProductsDetail3 from './components/ProductsDetail3';
import ProductsDetail4 from './components/ProductsDetail4';


import Case1 from './components/Case1';
import Case2 from './components/Case2';
import Case3 from './components/Case3';
import Case4 from './components/Case4';

import NotFound from './components/NotFound';
import ProductsIndex from './components/ProductsIndex';
import About from './components/About';
import { CartProvider } from './components/CartContext';
import CartWindow from './components/CartWindow';
import Footer from './components/Footer'


function App() {
  return (

 
    <div>

<CartProvider >
      <Header />
      <Routes> 
  
        <Route path="/About" element={<About />} />      
        <Route path='/Cart' element ={<CartWindow />} />      
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Products />}> 
           <Route path="/" element={<ProductsIndex />} /> 
           <Route path="/Case1" element={<Case1 />} />
           <Route path="/Case1/:product1ID" element={<ProductsDetail1 />} />
           <Route path="/Case2" element={<Case2 />} />
           <Route path="/Case2/:product2ID" element={<ProductsDetail2 />} />
           <Route path="/Case3" element={<Case3 />} />
           <Route path="/Case3/:product3ID" element={<ProductsDetail3 />} />
           <Route path="/Case4" element={<Case4 />} />
           <Route path="/Case4/:product4ID" element={<ProductsDetail4 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        

      </Routes>
      <Footer />

      
      </CartProvider>

    </div>
  );
}

export default App;
