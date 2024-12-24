/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie';

import instance from '../api';

export const categoryService = () => {
  const getAllCategory = async () => {
    const response = await instance.get('/category');

    return response.data.query;
  };

  const createCategory = async (payload) => {
    const response = await instance.post(
      '/category',
      payload,
      {
        category_name,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      },
    );

    console.log(response.data);

    if (!response.data.succes) {
      throw new Error(response.data.message || 'Failed to create category');
    }

    return response.data;
  };

  const categoryById = async (id) => {
    const response = await instance.get(`/category/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    return response.data;
  };

  return { getAllCategory, createCategory, categoryById };
};
