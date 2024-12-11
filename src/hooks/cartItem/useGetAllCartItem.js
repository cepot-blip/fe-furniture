/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

import { cartItemService } from '../../service/cartItem/cartItem';

export function useGetAllCartItem() {
  const dispatch = useDispatch();
  const { getAllCartItem } = cartItemService();

  const {
    data: cartItems,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cartItems'],
    queryFn: getAllCartItem,
  });

  return { cartItems, isLoading, isError };
}
