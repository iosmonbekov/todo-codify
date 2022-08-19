import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; // Wrapper for using routes
import './index.css';
import App from './App';
import Menu from './components/Menu'
import Comments from './pages/Comments';
import Http from './pages/Http';

const root = ReactDOM.createRoot(document.getElementById('root'));

const menu = [
  {path: '/', text: 'Home'},
  {path: '/comments', text: 'Comments'},
  {path: '/http', text: 'HTTP'},
  {path: '/todo', text: 'Todo'},
];

root.render(
  <BrowserRouter>
    <div className='container'>
      <Menu menu={menu} />
      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route path="/http"  element={<Http />} />
        <Route path="/todo"  element={<App />} />
        <Route path="/"  element={<div className='container'><h1>Home</h1></div>} />
      </Routes>
    </div> 
  </BrowserRouter>
);
