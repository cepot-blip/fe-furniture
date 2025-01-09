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

    console.log('Response from API:', response.data);

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create order');
    }

    const orderData = {
      order_id: response.data.data.id,
      user_id,
      total_price,
      status,
    };

    console.log('Dispatching order data to Redux:', orderData);
    dispatch(orderStore(orderData));

    return response.data;
  };

  const orderById = async (id) => {
    console.log('Fetching order by ID:', id);

    const response = await instance.get(`/order/${id}`);
    console.log('Response for order by ID:', response.data);

    const orderData = {
      order_id: response.data.data.id,
      user_id: response.data.data.user_id,
      total_price: response.data.data.total_price,
      status: response.data.data.status,
    };

    console.log('Dispatching fetched order data to Redux:', orderData);
    dispatch(orderStore(orderData));

    return response.data;
  };

  return { createOrder, orderById };
};
