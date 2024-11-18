/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import Notiflix from 'notiflix';

import instance from '../api';

export const userService = () => {
  const createUser = async ({ email, password, name, phone_number, role }) => {
    try {
      const response = await instance.post('/register', {
        email,
        password,
        name,
        role,
        phone_number,
      });

      sessionStorage.setItem('token', response.data.token);

      console.log('response', response);

      return response.data;
    } catch (error) {
      console.error('Terdapat kesalahan saat register user:', error);
      if (error.response) {
        Notiflix.Notify.failure(
          'Mohon perika kembali, jika anda belum mendapatkan token. Pilih role Admin',
        );
        throw new Error(error.response.data.message);
      }
    }
  };

  const loginUser = async ({ loginData, password }) => {
    let email;
    let phone_number;

    if (/^\d+$/.test(loginData)) {
      phone_number = loginData;
    } else {
      email = loginData;
    }

    try {
      const response = await instance.post('/login', {
        email,
        phone_number,
        password,
      });

      sessionStorage.setItem('token', response.data.token);
      console.log('Login successfully:', response);

      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        console.error('Terdapat kesalahan saat login:', error);
      }
      throw new Error(error.message);
    }
  };

  // blum kelar
  const getUserData = async (id) => {
    try {
      const response = await instance.get(`/users${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return { loginUser, createUser, getUserData };
};
