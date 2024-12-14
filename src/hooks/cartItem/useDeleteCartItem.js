/* eslint-disable no-console */
/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import { QueryClient, useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { cartItemService } from '../../service/cartItem/cartItem';

const queryClient = new QueryClient();

export function useDeleteCartItem() {
  const { deleteCartItem } = cartItemService();

  const { mutate: deleteCartItemMutation } = useMutation({
    mutationFn: async (id) => await deleteCartItem(id),
    onSuccess: (data) => {
      Notiflix.Notify.success(data.message || 'Berhasil menghapus item cart!');
      console.log('Delete cart item success:', data);
    },
    onError: (error) => {
      Notiflix.Notify.failure(
        error.response?.data?.message || 'Gagal menghapus item cart!',
      );
      console.error('Error deleting cart item:', error.response?.data);
    },
    onSettled: () => {
      // cache
      queryClient.invalidateQueries(['deletedCi']);
    },
  });

  return { deleteCartItemMutation };
}
