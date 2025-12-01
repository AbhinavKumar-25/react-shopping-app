// src/components/Header.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const items = useSelector((s) => s.cart.items);
  // compute total count
  const totalCount = Object.values(items).reduce((acc, cur) => acc + cur.qty, 0);

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "18px 24px", borderBottom: "1px solid #eee" }}>
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>Abhinav's House Plant Store</h1>
        </Link>
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link to="/">Products</Link>
        <Link to="/cart" style={{ position: "relative" }}>
          🛒
          <span style={{ marginLeft: 8, fontWeight: "bold" }}>{totalCount}</span>
        </Link>
      </nav>
    </header>
  );
}
