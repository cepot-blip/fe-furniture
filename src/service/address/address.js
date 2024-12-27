/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import instance from '../api';
export const addressService = (dispatch) => {
  const getAllAddress = async () => {
    const response = await instance.get('/addresses');
    console.log('response: ', response.data.query);

    return response.data.query;
  };

  const createAddress = async ({
    user_id,
    street,
    city,
    state,
    postal_code,
    country,
  }) => {
    console.log('Creating Address:', {
      user_id,
      street,
      city,
      state,
      postal_code,
      country,
    });
    const response = await instance.post('/address', {
      user_id,
      street,
      city,
      state,
      postal_code,
      country,
    });
    console.log('response: ', response.data);
    const address_id = response.data.data.id;
    dispatch(
      addressStore({ id, user_id, street, city, state, postal_code, country }),
    );

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create address');
    }
    return response.data;
  };

  return { getAllAddress, createAddress };
};
