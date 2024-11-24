import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
};

const cartItemReducer = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {},
});

export default cartItemReducer.reducer;
