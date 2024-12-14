/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { useDispatch } from 'react-redux';

import { cartStore } from '../../redux/reducers/cartReducer';
import instance from '../api';
export const cartService = (dispatch) => {
  const getAllCart = async () => {
    const response = await instance.get('/carts');

    return response.data.query;
  };

  const createCart = async ({ user_id, total_price }) => {
    const response = await instance.post('/cart', {
      user_id,
      total_price,
    });
    if (response.data.success) {
      console.log('Response: ', response.data);
      const cart_id = response.data.data.id;
      dispatch(cartStore({ cart_id, user_id, total_price }));
    }
    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create cart');
    }

    return response.data;
  };

  const deleteCart = async (id) => {
    console.log(`id: ${id}`);
    const response = await instance.delete(`/cart/${id}`);

    console.log(response.data);

    if (!response.data || !response.data.data) {
      throw new Error(response.data.message || 'Failed deleted cart by id');
    }

    console.log('data:', response.data);

    return response.data;
  };

  return { getAllCart, createCart, deleteCart };
};
