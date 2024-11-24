/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [], // products = value
  cart: [],
  quantity: 0,
};

const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productStore(state, action) {
      // menyimpan state data product
      state.value = action.payload;
    },
    setProductAddToCart(state, action) {
      // untuk ke cart
      console.log('product Add To Cart');
    },
    setResetProduct: () => initialState,
  },
});

export const { productStore, setProductAddToCart, setResetProduct } =
  productReducer.actions;
export default productReducer.reducer;
