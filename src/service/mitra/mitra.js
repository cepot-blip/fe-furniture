/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import cryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

import instance from '../api';

export const mitraService = () => {
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

  const createMitra = async ({
    user_id,
    company_name,
    business_type,
    address,
    contact_info,
  }) => {
    const response = await instance.post('/mitra', {
      user_id,
      company_name,
      business_type,
      address,
      contact_info,
    });
    if (!response.data.success) {
      throw new Error(response.data.message || 'Gagal Membuat Mitra');
    }
    return response.data;
  };

  return { createMitra };
};
