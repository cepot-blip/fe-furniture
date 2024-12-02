/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  user_id: 0,
  total_price: 0,
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existProduct = state.cart.findIndex(
        (item) => item.id === product.id,
      );
      if (existProduct !== -1) {
        state.cart[existProduct] = {
          ...state.cart[existProduct],
          quantity: state.cart[existProduct].quantity + 1,
        };
        return;
      }
      state.cart.push({
        ...product,
        quantity: 1,
      });

      state.total_price = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
      console.log('addToCart dari redux');
    },
  },
});
export const { addToCart } = cartReducer.actions;
export default cartReducer.reducer;
