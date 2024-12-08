/* eslint-disable object-curly-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import instance from '../api';

export const cartItemService = () => {
  const getAllCartItem = async () => {
    const response = await instance.get('/cart-items');

    return response.data.query;
  };

  const createCartItem = async () => {
    const response = await instance.post('/cart-item', {
      cart_id,
      product_id,
      quantitiy,
      subtotal_price,
    });
    if (response.data.success) {
      console.log('Response: ', response.data);
    }

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create cart item');
    }
  };
  return { getAllCartItem, createCartItem };
};
