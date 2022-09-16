import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Wrapper for using routes
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage/Index";
import ProductPage from "./pages/ProductPage/Index";
import AdminPage from "./pages/AdminPage/Index";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <TopBar />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cart" element={<div>Cart</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);
