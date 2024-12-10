/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-await */
/* eslint-disable no-console */
import { QueryClient, useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { cartService } from '../../service/cart/cart';

const queryClient = new QueryClient();

export function useDeleteCart() {
  const { deleteCart } = cartService();

  const { mutate: deleteCartMutation } = useMutation({
    mutationFn: async (id) => await deleteCart({ id }),
    onSuccess: (data) => {
      Notiflix.Notify.success(data.message || 'Berhasil menghapus item cart!');
      console.log('Delete cart success:', data);
    },
    onError: (error) => {
      Notiflix.Notify.failure(
        error.response?.data?.message || 'Gagal menghapus cart!',
      );
      console.error('Error deleting cart:', error.response?.data);
    },
    onSettled: () => {
      // cache
      queryClient.invalidateQueries(['deletedCi']);
    },
  });

  return { deleteCartMutation };
}
