/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shipping: [],
};

const shippingReducer = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    shippingStore(state, action) {
      console.log('payloaded:', action.payload);
      state.shipping = action.payload;
      console.log('Update state:', state.shipping);
      localStorage.setItem('shipping', JSON.stringify(state.shipping));
    },
  },
});

export const { shippingStore } = shippingReducer.actions;
export default shippingReducer.reducer;
