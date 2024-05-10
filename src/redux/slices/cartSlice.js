import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totals: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload.cartItem);
      state.totals = state.cartItems.reduce((previousValue, item) => {
        return previousValue + item.price;
      }, 0);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
