/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  user_id: 0,
  total_price: 0,
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});
export default cartReducer.reducer;
