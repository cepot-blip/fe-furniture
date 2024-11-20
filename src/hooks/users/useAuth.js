/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */

import Cookies from 'js-cookie';

import instance from '../../service/api';

/* eslint-disable camelcase */
export async function createUser({
  email,
  password,
  name,
  phone_number,
  role,
}) {
  try {
    const result = await instance.post('/register', {
      email,
      password,
      name,
      phone_number,
      role,
    });

    return result.data;
  } catch (error) {
    if (error.result) {
      return { error: error.result.data };
    }

    if (error.request) {
      return { error: 'No response from server' };
    }
    return { error: error.message };
  }
}

export async function loginUser({ email, password, phone_number }) {
  try {
    const result = await instance.post('/login', {
      email,
      phone_number,
      password,
    });
    Cookies.set('token', result.data.token);
    return result.data;
  } catch (error) {
    if (error.message) {
      return { error: error.response.data };
    }
    if (error.request) {
      return { error: 'No response from server' };
    }
    return { error: error.message };
  }
}
