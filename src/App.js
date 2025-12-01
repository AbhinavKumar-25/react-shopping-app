// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ maxWidth: 1100, margin: "24px auto", padding: 16 }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
