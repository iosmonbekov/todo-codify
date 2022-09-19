import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.every((prod) => prod.id !== action.payload.id)) {
        state.cart.push(action.payload);
      }
    },
    removeFromCard: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.cart.splice(index, 1);
    },
  },
});

export const { addToCart, removeFromCard } = cartSlice.actions;

export default cartSlice.reducer;
