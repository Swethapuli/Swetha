import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      state.items = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
