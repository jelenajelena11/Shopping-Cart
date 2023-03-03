import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updatedCartList = state.cartList.concat(action.payload);
      const updatedTotal = state.total + action.payload.price;
      return { ...state, cartList: updatedCartList, total: updatedTotal };
    },
    removeFromCart: (state, action) => {
      const updatedCartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      const updatedTotal = state.total - action.payload.price;
      return { ...state, cartList: updatedCartList, total: updatedTotal };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
