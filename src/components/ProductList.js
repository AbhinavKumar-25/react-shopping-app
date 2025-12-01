// src/components/ProductList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductList() {
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Product Listing</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {products.map((p) => {
          const disabled = !!cartItems[p.id];
          return (
            <div key={p.id} style={{ width: 220, border: "1px solid #ddd", padding: 12 }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: 140, objectFit: "cover" }} />
              <h3>{p.name}</h3>
              <p>Category: {p.category}</p>
              <p>Price: ${p.price}</p>
              <button onClick={() => handleAdd(p)} disabled={disabled}>
                {disabled ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
