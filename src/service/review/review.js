/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import instance from '../api';

export const reviewService = () => {
  const createReview = async ({
    user_id,
    product_id,
    rating,
    review_content,
  }) => {
    const response = await instance.post('/reviews', {
      user_id,
      product_id,
      rating,
      review_content,
    });

    console.log(response.data);

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed create review');
    }

    return response.data.data;
  };

  const getAllReview = async () => {
    const response = await instance.get('/reviews');

    return response.data.data;
  };

  return { createReview, getAllReview };
};
