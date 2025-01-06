/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shipping: [],
  id: null,
};

const shippingReducer = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    shippingStore(state, action) {
      console.log('payloaded:', action.payload);

      if (!action.payload || typeof action.payload !== 'object') {
        console.error('Invalid payload:', action.payload);
        return;
      }

      const { shipping_id } = action.payload;

      state.shipping = action.payload;
      state.id = shipping_id || 0;
      console.log('Update state:', state);

      localStorage.setItem('shipping_data', JSON.stringify(state.shipping));
    },
  },
});
export const { shippingStore } = shippingReducer.actions;
export default shippingReducer.reducer;
