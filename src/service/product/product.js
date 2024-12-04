/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie';

import { productStore } from '../../redux/reducers/productReducer';
import instance from '../api';

export const productService = () => {
  const getAllProduct = async () => {
    const response = await instance.get('/products');

    return response.data.query;
  };

  const createProduct = async ({
    name,
    description,
    price,
    stock,
    category_id,
    image_url,
  }) => {
    const response = await instance.post('/product', {
      name,
      description,
      price,
      stock,
      category_id,
      image_url,
    });

    console.log(response.data);

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create product');
    }

    return response.data.data;
  };

  const getProductById = async (id) => {
    console.log(`id: ${id}`);

    const response = await instance.get(`/product/${id}`);

    console.log(response.data);

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed fetcing product by id');
    }

    console.log('product data:', response.data.data);
    return response.data.data;
  };

  return { getAllProduct, createProduct, getProductById };
};
