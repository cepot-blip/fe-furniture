/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  payment: null,
};
const paymentReducer = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    paymentStore(state, action) {
      console.log('payloaded:', action.payload);
      state.payment = action.payload;
      console.log('Update state:', state.payload);
      localStorage.setItem('payment', JSON.stringify(state.payment));
    },
  },
});
export const { paymentStore } = paymentReducer.actions;
export default paymentReducer.reducer;
