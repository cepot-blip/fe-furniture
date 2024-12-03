/* eslint-disable import/newline-after-import */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import instance from '../api';
export const cartService = () => {
  const getAllCart = async () => {
    const response = await instance.get('/carts');

    return response.data.query;
  };

  const createCart = async ({ user_id, total_price }) => {
    const response = await instance.post('/cart', {
      user_id,
      total_price,
    });
    // eslint-disable-next-line no-console
    console.log('Response: ', response.data);
    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create cart');
    }

    return response.data;
  };

  return { getAllCart, createCart };
};
