/* eslint-disable no-console */
/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import { QueryClient, useMutation } from '@tanstack/react-query';

import { cartItemService } from '../../service/cartItem/cartItem';

const queryClient = new QueryClient();

export function useDeleteCartItem() {
  const { deleteCartItem } = cartItemService();

  const { mutate: deleteCartItemMutation } = useMutation({
    mutationFn: async (id) => await deleteCartItem(id),
    onSettled: () => {
      // cache
      queryClient.invalidateQueries(['deletedCi']);
    },
  });

  return { deleteCartItemMutation };
}
