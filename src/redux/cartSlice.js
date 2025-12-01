// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {} // { productId: { product, qty } }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const id = product.id;
      if (!state.items[id]) {
        state.items[id] = { product, qty: 1 };
      } else {
        state.items[id].qty += 1;
      }
    },
    increaseQty(state, action) {
      const id = action.payload;
      if (state.items[id]) state.items[id].qty += 1;
    },
    decreaseQty(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty -= 1;
        if (state.items[id].qty <= 0) delete state.items[id];
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      delete state.items[id];
    },
    clearCart(state) {
      state.items = {};
    }
  }
});

export const { addToCart, increaseQty, decreaseQty, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
