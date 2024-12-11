/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
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
      quantity,
      subtotal_price,
    });

    if (response.data.success) {
      console.log('Response: ', response.data);
    }

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create cart item');
    }
  };

  const deleteCartItem = async (id) => {
    console.log(`id: ${id}`);

    const response = await instance.delete(`/cart-item/${id}`);

    console.log(response.data);

    if (!response.data || !response.data.data) {
      throw new Error(
        response.data.message || 'Failed deleted cart item by id',
      );
    }

    console.log('data:', response.data);

    return response.data;
  };
  return { getAllCartItem, createCartItem, deleteCartItem };
};
