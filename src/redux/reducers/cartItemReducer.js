/* eslint-disable camelcase */
/* eslint-disable operator-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable comma-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
  cartItemStore: [],
  id: 0,
  cart_id: 0,
  product_id: 0,
  quantitiy: 0,
  subtotal_price: 0,
  total_price: 0,
};

const cartItemReducer = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    addToCartItem: (state, action) => {
      const product = action.payload;
      const existProduct = state.cartItem.findIndex(
        (item) => item.id === product.id,
      );
      if (existProduct !== -1) {
        state.cartItem[existProduct] = {
          ...state.cartItem[existProduct],
          quantity: state.cartItem[existProduct].quantity + 1,
          subtotal_price:
            state.cartItem[existProduct].price *
            (state.cartItem[existProduct].quantity + 1),
        };
        state.total_price = state.cartItem.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
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
    deleteCartItem: (state, action) => {
      const filterCart = state.cartItem.filter(
        (item) => item.id !== action.payload,
      );
      state.cartItem = filterCart;
      state.total_price = state.cartItem.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },

    deleteCartItemStore: (state, action) => {
      const filterCart = state.cartItemStore.filter(
        (item) => item.id !== action.payload,
      );
      state.cartItemStore = filterCart;
    },
    addToCartItemStore: (state, action) => {
      console.log('payloaded:', action.payload);

      const { cartItemId, cart_id, product_id, quantity, subtotal_price } =
        action.payload;

      state.cartItemStore.push({
        id: cartItemId || 0,
        cart_id: cart_id || 0,
        product_id: product_id || 0,
        quantity: quantity || 0,
        subtotal_price: subtotal_price || 0,
      });

      console.log('Update state:', state.cartItem);
    },
  },
});
export const {
  addToCartItem,
  deleteCartItem,
  addToCartItemStore,
  deleteCartItemStore,
} = cartItemReducer.actions;
export default cartItemReducer.reducer;
