import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import Menu from './components/Menu'
import {BrowserRouter, Route, Routes} from 'react-router-dom'; // Wrapper for using routes

const root = ReactDOM.createRoot(document.getElementById('root'));

const menu = [
  {path: '/', text: 'Home'},
  {path: '/about', text: 'About'},
  {path: '/contacts', text: 'Contacts'},
  {path: '/todo', text: 'Todo'},
];

root.render(
  <BrowserRouter>
    <div className='container'>
      <Menu menu={menu} />
    </div> 

    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contacts"  element={<div className='container'><h1>Contacts</h1></div>} />
      <Route path="/todo"  element={<App />} />
      <Route path="/"  element={<div className='container'><h1>Home</h1></div>} />
    </Routes>

  </BrowserRouter>
);
