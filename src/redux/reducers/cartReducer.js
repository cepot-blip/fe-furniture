/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
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
      const { payload } = action;
      state.id = payload.id || 0;
      state.user_id = payload.user_id || 0;
      state.total_price = payload.total_price || 0;
    },
  },
});
export const { cartStore } = cartReducer.actions;
export default cartReducer.reducer;
