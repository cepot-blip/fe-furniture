/* eslint-disable no-console */
/* eslint-disable no-return-await */
import { useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { shippingService } from '../../service/shipping/shipping';

export default function useCreateShipping() {
  const { createShipping } = shippingService();
  const { mutate: createShippingMutation } = useMutation({
    mutationFn: async (payload) => await createShipping(payload),

    onSuccess: (data) => {
      Notiflix.Notify.success('Category berhasil dibuat');
      console.log('Create shipping succes', data);
    },

    onError: (error) => {
      Notiflix.Notify.failure(
        error.message || 'Gagal membuat category, periksa kembali',
      );
      console.log('Error creating category', error);
    },
  });

  return { createShippingMutation };
}
