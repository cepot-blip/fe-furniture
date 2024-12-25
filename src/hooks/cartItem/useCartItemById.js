/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';

import { cartItemService } from '../../service/cartItem/cartItem';

/* eslint-disable no-unused-vars */
export function useCartItemById(id) {
  const { getCartById } = cartItemService();

  const {
    data: cart,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cart', id],
    queryFn: () => getCartById(id),
    enabled: !!id,
  });

  return { cart, isLoading, isError };
}
