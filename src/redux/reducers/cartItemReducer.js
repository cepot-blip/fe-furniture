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
  quantity: 0,
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

    increaseCartItem: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === action.payload,
      );

      if (itemIndex !== -1) {
        state.cartItem[itemIndex].quantity += 1;
        state.cartItem[itemIndex].subtotal_price =
          state.cartItem[itemIndex].price * state.cartItem[itemIndex].quantity;
      }

      // Update total harga
      state.total_price = state.cartItem.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    decreaseCartItem: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === action.payload,
      );
      if (itemIndex !== -1) {
        if (state.cartItem[itemIndex].quantity > 1) {
          state.cartItem[itemIndex].quantity -= 1;
          state.cartItem[itemIndex].subtotal_price =
            state.cartItem[itemIndex].price *
            state.cartItem[itemIndex].quantity;
        } else {
          // Hapus item jika quantity == 1
          state.cartItem = state.cartItem.filter(
            (item) => item.id !== action.payload,
          );
        }
      }

      // Update total harga
      state.total_price = state.cartItem.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },

    increaseCartItemStore: (state, action) => {
      const itemIndex = state.cartItemStore.findIndex(
        (cartItemStore) => cartItemStore.id === action.payload,
      );

      if (itemIndex !== -1) {
        const product = state.cartItem.find(
          (item) => item.id === state.cartItemStore[itemIndex].product_id,
        );

        if (product) {
          state.cartItemStore[itemIndex].quantity += 1;
          state.cartItemStore[itemIndex].subtotal_price =
            state.cartItemStore[itemIndex].quantity * product.price;
        }
      }
    },
    decreaseCartItemStore: (state, action) => {
      const itemIndex = state.cartItemStore.findIndex(
        (cartItemStore) => cartItemStore.id === action.payload,
      );

      if (itemIndex !== -1) {
        const product = state.cartItem.find(
          (item) => item.id === state.cartItemStore[itemIndex].product_id,
        );

        if (product) {
          if (state.cartItemStore[itemIndex].quantity > 1) {
            // Kurangi quantity dan hitung subtotal_price
            state.cartItemStore[itemIndex].quantity -= 1;
            state.cartItemStore[itemIndex].subtotal_price =
              state.cartItemStore[itemIndex].quantity * product.price;
          } else if (state.cartItemStore[itemIndex].quantity === 1) {
            // Hapus item dari cartItemStore jika quantity menjadi 0
            state.cartItemStore = state.cartItemStore.filter(
              (item) => item.id !== action.payload,
            );
          }
        }
      }
    },
    deleteCartItemStore: (state, action) => {
      const filterCart = state.cartItemStore.filter(
        (item) => item.id !== action.payload,
      );
      state.cartItemStore = filterCart;
    },
    setResetCartItem() {
      return initialState;
    },
  },
});
export const {
  addToCartItem,
  deleteCartItem,
  addToCartItemStore,
  deleteCartItemStore,
  increaseCartItemStore,
  decreaseCartItemStore,
  increaseCartItem,
  decreaseCartItem,
  setResetCartItem,
} = cartItemReducer.actions;
export default cartItemReducer.reducer;
