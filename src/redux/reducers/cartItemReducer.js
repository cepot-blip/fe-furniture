/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
  cart_id: 0,
  product_id: 0,
  quantitiy: 0,
  sub_totalprice: 0,
};

const cartItemReducer = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existProduct = state.cartItem.findIndex(
        (item) => item.id === product.id,
      );
      if (existProduct !== -1) {
        state.cartItem[existProduct] = {
          ...state.cartItem[existProduct],
          quantity: state.cartItem[existProduct].quantity + 1,
        };
        return;
      }
      state.cartItem.push({
        ...product,
        quantity: 1,
      });

      state.total_price = state.cartItem.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
      console.log('addToCart dari redux');
    },
  },
});
export const { addToCart } = cartItemReducer.actions;
export default cartItemReducer.reducer;
