/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { orderStore } from '../../redux/reducers/orderReducer';
import instance from '../api';

export const orderService = (dispatch) => {
  const createOrder = async ({ user_id, cart_id, total_price, status }) => {
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

  const orderById = async (id) => {
    console.log('order sebelum response:', id);

    const response = await instance.get(`/order/${id}`);
    console.log('order setelah response:', id);

    const order_id = response.data.data.id;
    dispatch(orderStore({ order_id }));

    console.log('res redux:', response.data, 'order id:', order_id);

    return response.data || order_id;
  };
  return { createOrder, orderById };
};
