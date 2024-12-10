/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { useMutation } from '@tanstack/react-query';

import { productService } from '../../service/product/product';

export function useDeleteProduct() {
  const { deletedProduct } = productService();

  const { mutate: deleteProductMutation } = useMutation({
    mutationFn: async ({ id }) => {
      await deletedProduct(id);
    },
    onMutate: async (variables) => {
      console.log('Mutation is about to start with variables:', variables);
      return { id: variables.id };
    },
    onError: (error, variables, context) => {
      console.error('Error deleting product:', error);
    },
    onSettled: (data, error, variables, context) => {
      console.log('Mutation settled');
    },
  });

  return { deleteProductMutation };
}
