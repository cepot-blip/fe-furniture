/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import instance from '../api';

export const categoryService = () => {
  const getAllCategory = async () => {
    const response = await instance.get('/category');

    return response.data.query;
  };

  const createCategory = async () => {
    const response = await instance.post('/category', {
      category_name,
    });

    console.log(response.data);

    if (!response.data.succes) {
      throw new Error(response.data.message || 'Failed to create category');
    }

    return response.data.data;
  };

  return { getAllCategory, createCategory };
};
