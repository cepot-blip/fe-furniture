/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie';

import instance from '../api';

export const productService = () => {
  const getAllProduct = async () => {
    const response = await instance.get('/products', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    return response.data.query;
  };

  const createProduct = async ({
    name,
    description,
    price,
    stock,
    category_id,
    mitra_id,
    image_url,
  }) => {
    const response = await instance.post(
      '/product',
      {
        name,
        description,
        price,
        stock,
        category_id,
        mitra_id,
        image_url,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      },
    );

    console.log(response.data);

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create product');
    }

    return response.data;
  };

  const getProductById = async (id) => {
    console.log(`id: ${id}`);

    const response = await instance.get(`/product/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    console.log(response.data);

    if (!response.data || !response.data.data) {
      throw new Error(response.data.message || 'Failed fetcing product by id');
    }

    console.log('product data:', response.data);
    return response.data.data;
  };

  const deletedProduct = async (id) => {
    console.log(`id: ${id}`);

    const response = await instance.delete(`/product/${id}`);

    console.log(response.data);

    if (!response.data || !response.data.data) {
      throw new Error(response.data.message || 'Failed deleted product by id');
    }

    console.log('product data deleted:', response.data);
    return response.data.data;
  };

  return { getAllProduct, createProduct, getProductById, deletedProduct };
};
