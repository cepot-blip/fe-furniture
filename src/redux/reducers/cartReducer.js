/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  id: 0,
  user_id: 0,
  total_price: 0,
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartStore(state, action) {
      console.log('payloaded:', action.payload);
      const { cart_id, user_id, total_price } = action.payload;
      state.id = cart_id || 0;
      state.user_id = user_id || 0;
      state.total_price = total_price || 0;
      console.log('Update state:', state);
    },
  },
});

export const { cartStore } = cartReducer.actions;
export default cartReducer.reducer;
