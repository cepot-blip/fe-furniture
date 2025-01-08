/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import instance from '../api';

export const checkoutService = () => {
  const createCheckout = async ({
    user_id,
    cart_id,
    payment_id,
    shipping_id,
    address_id,
    status,
    total_price,
  }) => {
    console.log('Call req checkout body:', {
      user_id,
      cart_id,
      payment_id,
      shipping_id,
      address_id,
      status,
      total_price,
    });
    const response = await instance.post('/checkout', {
      user_id,
      cart_id,
      payment_id,
      shipping_id,
      address_id,
      status,
      total_price,
    });
    console.log('Response From API: ', response.data);
    return response.data;
  };
  return {
    createCheckout,
  };
};
