/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { orderStore } from '../../redux/reducers/orderReducer';
import instance from '../api';

export const orderService = (dispatch) => {
  const createOrder = async ({ user_id, cart_id, total_price, status }) => {
    console.log('Creating Order:', { user_id, cart_id, total_price, status });
    const response = await instance.post('/order', {
      user_id,
      cart_id,
      total_price,
      status,
    });
    console.log('response: ', response.data);
    const order_id = response.data.data.id;
    dispatch(orderStore({ order_id }));

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed create order');
    }
    return response.data;
  };
  return { createOrder };
};
