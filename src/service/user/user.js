/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import axios from 'axios';
import Cookies from 'js-cookie';

import { authStore } from '../../redux/reducers/authReducer';
import instance from '../api';

export const userService = (dispatch) => {
  const createUser = async ({
    id,
    name,
    email,
    password,
    phone_number,
    role,
    token,
  }) => {
    const response = await instance.post('/register', {
      id,
      name,
      email,
      password,
      phone_number,
      role,
      token,
    });
    if (!response.data.success) {
      throw new Error(response.data.message || 'Gagal Register');
    }

    Cookies.set('token', response.data.token && response.data);
    dispatch(
      authStore({
        // id: response.data.id,
        // name: response.data.name,
        // email: response.data.email,
        // phone_number: response.data.phone_number,
        // role: response.data.role,
        token: response.data.token,
      }),
    );
    return response.data;
  };

  const loginUser = async ({ id, loginData, password }) => {
    let email = '';
    let phone_number = '';

    if (/^\d+$/.test(loginData)) {
      phone_number = loginData;
    } else {
      email = loginData;
    }

    const response = await instance.post('/login', {
      id,
      email,
      phone_number,
      password,
    });

    if (response.data.success) {
      const token = response.data.token;
      // const user = response.data.loginData;
      Cookies.set('token', token); // encrypt
      dispatch(authStore({ token, loginData, id }));

      // console.log(res)
    } else {
      throw new Error('Login failed');
    }

    return response.data;
  };

  const getUserData = async (id) => {
    try {
      // belum kelar
      const response = await instance.get(`/users/${id}`);
      if (!response.data.success) {
        throw new Error('User data tidak ditemukan');
      }
      return response.data.data;
    } catch (error) {
      console.error('Gagal mendapatkan data user:', error.message);
      throw error;
    }
  };

  const getAllUsers = async () => {
    const response = await instance.get('/users');
    return response.data;
  };

  return { createUser, loginUser, getUserData, getAllUsers };
};
