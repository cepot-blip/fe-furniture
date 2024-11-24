import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartReducer.reducer;
