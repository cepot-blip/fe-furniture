/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-return-await */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { cartService } from '../../service/cart/cart';

export function useCreateCart() {
  const dispatch = useDispatch();
  const { createCart } = cartService(dispatch);
  const { mutate: createCartMutation } = useMutation({
    mutationFn: async ({ user_id, total_price }) => {
      console.log(
        'Creating cart for user:',
        user_id, // masih belum dapat id userAuth nya
        'with total price:',
        total_price,
      );

      return await createCart({ user_id, total_price });
    },
  });
  return { createCartMutation };
}
