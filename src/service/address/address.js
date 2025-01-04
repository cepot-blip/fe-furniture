/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import Cookies from 'js-cookie';

import { addressStore } from '../../redux/reducers/addressReducer';
import instance from '../api';

export const addressService = (dispatch) => {
  const getAllAddress = async () => {
    const response = await instance.get('/addresses');
    console.log('response: ', response.data.query);

    return response.data.query;
  };

  const createAddress = async ({
    id,
    user_id,
    street,
    city,
    state,
    postal_code,
    country,
  }) => {
    const response = await instance.post('/address', {
      id,
      user_id,
      street,
      city,
      state,
      postal_code,
      country,
    });
    console.log('response: ', response.data);

    if (!response.data.status) {
      throw new Error(response.data.message || 'Failed to create address');
    }

    const addressData = {
      id,
      user_id,
      street,
      city,
      state,
      postal_code,
      country,
    };

    // dispatch(addressStore(addressData));

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create address');
    }
    return response.data;
  };

  const addressById = async (id) => {
    console.log('address sebelum response:', id);

    const response = await instance.get(`/address/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    console.log(response.data);

    if (!response.data || !response.data.data) {
      throw new Error(response.data.message || 'Failed get address by id');
    }

    console.log('address data:', response.data);
    return response.data.data;
  };

  return { getAllAddress, createAddress, addressById };
};
