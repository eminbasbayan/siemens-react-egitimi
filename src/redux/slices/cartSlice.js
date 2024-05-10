import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload.cartItem);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
