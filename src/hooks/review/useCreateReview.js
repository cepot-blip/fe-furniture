/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable no-undef */
import { useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { reviewService } from '../../service/review/review';

export const useCreateReviews = () => {
  const { createReview } = reviewService();

  const { mutate: createRev } = useMutation({
    mutationFn: async ({ user_id, product_id, rating, review_content }) =>
      await createReview({
        user_id,
        product_id,
        rating,
        review_content,
      }),

    onSuccess: (data) => {
      Notiflix.Notify.success('Review berhasil dibuat!');
      console.log('Create review succes', data);
    },

    onError: (error) => {
      Notiflix.Notify.failure(
        error.message,
        'Gagal membuat review. Periksa kembali',
      );
      console.log(error.message, 'Error create review');
    },
  });

  return { createRev };
};
