/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: null,
  // id: null,
  // user_id: null,
  // street: null,
  // city: null,
  // states: null,
  // postal_code: null,
  // country: null,
};

const addressReducer = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addressStore(state, action) {
      console.log('payloaded:', action.payload);
      const {
        street,
        city,
        state: propincies,
        postal_code,
        country,
      } = action.payload;

      const existAddress = state.address || {};

      const newAddress = {
        id: existAddress.id || action.payload.id,
        user_id: existAddress.user_id || action.payload.user_id,
        street,
        city,
        state: propincies,
        postal_code,
        country,
      };

      state.address = newAddress;

      localStorage.setItem('address', JSON.stringify(state.address));

      console.log('Address:', state.address);
    },

    addressReset() {
      localStorage.removeItem('address');
      return initialState;
    },

    addressById(state, action) {
      const addressId = action.payload;
      const address = state.address.find((addr) => addr.id === addressId);
      return address || null;
    },

    addressByIdFromStorage(state, action) {
      const addressId = action.payload;
      const addressStorage = JSON.parse(localStorage.getItem('address')) || [];
      const foundAddress = addressStorage.find((addr) => addr.id === addressId); // check adress storage
      return foundAddress || null;
    },
  },
});

export const {
  addressStore,
  addressReset,
  addressById,
  addressByIdFromStorage,
} = addressReducer.actions;
export default addressReducer.reducer;
