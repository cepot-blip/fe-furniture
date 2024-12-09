/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import instance from '../api';

export const cartItemService = () => {
  const getAllCartItem = async () => {
    const response = await instance.get('/cart-items');

    return response.data.query;
  };

  const createCartItem = async ({
    cart_id,
    product_id,
    quantity,
    subtotal_price,
  }) => {
    const response = await instance.post('/cart-item', {
      cart_id,
      product_id,
      quantity,
      subtotal_price,
    });

    console.log('Response', response);
    if (!response.data.succes) {
      throw new Error(response.data.message || 'Failed to create cart item');
    }
  };

  return { getAllCartItem, createCartItem };
};
