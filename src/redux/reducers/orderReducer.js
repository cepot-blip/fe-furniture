/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: [],
  id: null,
};

const orderReducer = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderStore(state, action) {
      console.log('payloaded:', action.payload);
      const { order_id } = action.payload;
      state.id = order_id || 0;
    },
  },
});
export const { orderStore } = orderReducer.actions;
export default orderReducer.reducer;
