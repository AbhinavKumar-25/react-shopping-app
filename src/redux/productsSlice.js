// src/redux/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

/*
 We'll seed 6 houseplants. You can replace image URLs with local images in /public or links.
*/
const initialProducts = [
  {
    id: "p1",
    name: "Fiddle Leaf Fig",
    price: 20,
    category: "Indoor",
    image: "/images/fiddle_leaf.jpg"
  },
  {
    id: "p2",
    name: "Snake Plant",
    price: 12,
    category: "Indoor",
    image: "/images/snake_plant.jpg"
  },
  {
    id: "p3",
    name: "Monstera Deliciosa",
    price: 25,
    category: "Indoor",
    image: "/images/monstera.jpg"
  },
  {
    id: "p4",
    name: "Aloe Vera",
    price: 8,
    category: "Succulent",
    image: "/images/aloe_vera.jpg"
  },
  {
    id: "p5",
    name: "Jade Plant",
    price: 15,
    category: "Succulent",
    image: "/images/jade.jpg"
  },
  {
    id: "p6",
    name: "Spider Plant",
    price: 10,
    category: "Hanging",
    image: "/images/spider.jpg"
  }
];

const productsSlice = createSlice({
  name: "products",
  initialState: { products: initialProducts },
  reducers: {}
});

export default productsSlice.reducer;
