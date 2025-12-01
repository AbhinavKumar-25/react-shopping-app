// src/components/CartPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const cartArray = Object.values(items);

  const totalItems = cartArray.reduce((acc, it) => acc + it.qty, 0);
  const totalCost = cartArray.reduce((acc, it) => acc + it.qty * it.product.price, 0);

  return (
    <div style={{ padding: 24 }}>
      <h2>Shopping Cart</h2>
      <p>Total items: {totalItems} | Total cost: ${totalCost}</p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr><th>Thumbnail</th><th>Name</th><th>Unit Price</th><th>Qty</th><th>Actions</th></tr></thead>
        <tbody>
          {cartArray.map((it) => (
            <tr key={it.product.id}>
              <td><img src={it.product.image} alt={it.product.name} style={{ width: 80 }} /></td>
              <td>{it.product.name}</td>
              <td>${it.product.price}</td>
              <td>{it.qty}</td>
              <td>
                <button onClick={() => dispatch(increaseQty(it.product.id))}>+</button>
                <button onClick={() => dispatch(decreaseQty(it.product.id))}>-</button>
                <button onClick={() => dispatch(removeItem(it.product.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => alert("Coming Soon")}>Checkout</button>
        <Link to="/" style={{ marginLeft: 12 }}>
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}
