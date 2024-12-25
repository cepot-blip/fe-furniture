/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../reducers/authReducer';
import cartItemReducer from '../reducers/cartItemReducer';
import cartReducer from '../reducers/cartReducer';
import productReducer from '../reducers/productReducer';
import userReducer from '../reducers/userReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // user: userReducer,
    product: productReducer,
    cart: cartReducer,
    cartItem: cartItemReducer,
  },
  devTools: true,
});

export default store;
