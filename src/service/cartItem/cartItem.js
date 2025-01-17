/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import Cookies from 'js-cookie';

import { addToCartItemStore } from '../../redux/reducers/cartItemReducer';
import instance from '../api';

export const cartItemService = (dispatch) => {
  const getAllCartItem = async () => {
    const response = await instance.get('/cart-items', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    return response.data.query;
  };

  const updateCartItem = async ({
    id,
    cart_id,
    product_id,
    quantity,
    subtotal_price,
  }) => {
    console.log('Updating Cart Item:', {
      id,
      cart_id,
      product_id,
      quantity,
      subtotal_price,
    });
    const response = await instance.put('/cart-item', {
      id,
      cart_id,
      product_id,
      quantity,
      subtotal_price,
    });
    console.log('response Update:', response.data);
    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to update cart item');
    }
    return response.data;
  };
  const createCartItem = async ({
    cart_id,
    product_id,
    quantity,
    subtotal_price,
  }) => {
    const response = await instance.post(
      '/cart-item',
      {
        cart_id,
        product_id,
        quantity,
        subtotal_price,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      },
    );
    console.log(' Response : ', response.data);
    const cartItemId = response.data.data.id;
    console.log('cartItemId: ', cartItemId);

    dispatch(
      addToCartItemStore({
        ...response.data.data,
        cartItemId,
      }),
    );
    console.log('Response: ', response.data);

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create cart item');
    }

    return response.data;
  };

  const deleteCartItem = async ({ id }) => {
    console.log(` isi id cartItem: ${id}`);

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
  return { getAllCartItem, createCartItem, deleteCartItem, updateCartItem };
};
