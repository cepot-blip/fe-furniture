/* eslint-disable no-console */
/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { categoryService } from '../../service/category/category';

export default function useCreateCategory() {
  const { createCategory } = categoryService();
  const { mutate: createCtg } = useMutation({
    mutationFn: async ({ category_name }) =>
      await createCategory({
        category_name,
      }),

    onSuccess: (data) => {
      Notiflix.Notify.success('Category berhasil dibuat');
      console.log('Create category succes', data);
    },

    onError: (error) => {
      Notiflix.Notify.failure(
        error.message || 'Gagal membuat category, periksa kembali',
      );

      console.log('Error creating category', error);
    },
  });

  return { createCtg };
}
