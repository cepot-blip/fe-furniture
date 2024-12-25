/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import axios from 'axios';
import cryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

import { authStore } from '../../redux/reducers/authReducer';
import instance from '../api';

export const userService = (dispatch) => {
  const saveToken = (token) => {
    Cookies.set('token', token, { expires: 7, sameSite: 'None', secure: true });
  };

  const getToken = () => {
    const token = Cookies.get('token');
    if (token) {
      const decryptedToken = cryptoJS.AES.decrypt(
        token,
        import.meta.env.VITE_API_SECRET,
      ).toString(cryptoJS.enc.Utf8);
      return decryptedToken;
    }
    return null;
  };

  const decodeToken = () => {
    const token = getToken();
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken;
    }
    return null;
  };

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
      const { token } = response.data;

      saveToken(token);
      const decodedToken = decodeToken();
      if (decodedToken) {
        const user_id = decodedToken.id;
        dispatch(authStore({ token, loginData, id: user_id }));
      } else {
        throw new Error('Token invalid');
      }
    } else {
      throw new Error('Login failed');
    }

    return response.data;
  };

  const getUserById = async (id) => {
    console.log(`id: ${id}`);
    const response = await instance.get(`/users/${id}`);

    console.log(response.data);

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed get user by id');
    }
  };

  const getAllUsers = async () => {
    const response = await instance.get('/users');

    return response.data.query;
  };

  return { createUser, loginUser, getUserById, getAllUsers };
};
