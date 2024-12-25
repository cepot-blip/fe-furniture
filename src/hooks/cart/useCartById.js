/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';

import { cartService } from '../../service/cart/cart';

export function useCartById(id) {
  const { getCartById } = cartService();

  const {
    data: cartIdQuery,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cart', id],
    queryFn: () => getCartById(id),
    retry: false,
  });

  return { cartIdQuery, isLoading, isError };
}
