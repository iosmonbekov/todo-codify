import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Wrapper for using routes
import './index.css';

import TopBar from './components/TopBar';
import HomePage from './pages/HomePage/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <TopBar />

    <div className='container'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<div>Cart</div>} />
        <Route path='/product/:id' element={<div>Product</div>} />
        <Route path='/admin' element={<div>Admin</div>} />
      </Routes>
    </div>
  </BrowserRouter>
);
