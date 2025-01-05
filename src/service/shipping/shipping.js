/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie';

import instance from '../api';

export const shippingService = () => {
  const createShipping = async (payload) => {
    const response = await instance.post(
      '/shipping',
      payload,
      {
        order_id,
        address_id,
        shipping_cost,
        shipping_date,
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      },
    );

    console.log(response.data);

    if (!response.data.succes) {
      throw new Error(response.data.message || 'Failed to create shipping');
    }
    return response.data;
  };

  const shippingById = async (id) => {
    const response = await instance.get(`/shipping${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    return response.data;
  };

  return { createShipping, shippingById };
};
