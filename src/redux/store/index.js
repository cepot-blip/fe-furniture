/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';

import addressStore from '../reducers/addressReducer';
import authReducer from '../reducers/authReducer';
import cartItemReducer from '../reducers/cartItemReducer';
import cartReducer from '../reducers/cartReducer';
import orderReducer from '../reducers/orderReducer';
import productReducer from '../reducers/productReducer';
import shippingReducer from '../reducers/shippingReducer';
import userReducer from '../reducers/userReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // user: userReducer,
    product: productReducer,
    cart: cartReducer,
    cartItem: cartItemReducer,
    order: orderReducer,
    address: addressStore,
    shipping: shippingReducer,
  },
  devTools: true,
});

export default store;
