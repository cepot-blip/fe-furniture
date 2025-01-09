/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: [],
};

const orderReducer = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderStore(state, action) {
      console.log('payload redux store:', action.payload);

      // const { order_id, user_id, total_price, status } = action.payload;

      // state.order.push({
      //   order_id: order_id || 0,
      //   user_id: user_id || 0,
      //   total_price: total_price || 0,
      //   status: status || 0,
      // });
      state.order = action.payload;

      console.log('Updated state:', state.order);

      localStorage.setItem('order', JSON.stringify(state.order));
    },
  },
});

export const { orderStore } = orderReducer.actions;
export default orderReducer.reducer;
