import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Wrapper for using routes
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import TopBar from './components/TopBar';
import HomePage from './pages/HomePage/Index';
import ProductPage from './pages/ProductPage/Index';
import AdminPage from './pages/AdminPage/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <TopBar />

    <div className='container'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/cart' element={<div>Cart</div>} />
      </Routes>
    </div>
  </BrowserRouter>
);
