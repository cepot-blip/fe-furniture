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
  address: [],
  id: null,
  user_id: null,
  street: null,
  city: null,
  state: null,
  postal_code: null,
  country: null,
};
const addressReducer = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addressStore(item, action) {
      console.log('payloaded:', action.payload);
      const { address_id, user_id, street, city, state, postal_code, country } =
        action.payload;
      item.id = address_id;
      item.user_id = user_id;
      item.street = street;
      item.city = city;
      item.state = state;
      item.postal_code = postal_code;
      item.country = country;
      console.log('updated state:', item);
    },
  },
});

export const { addressStore } = addressReducer.actions;
export default addressReducer.reducer;
