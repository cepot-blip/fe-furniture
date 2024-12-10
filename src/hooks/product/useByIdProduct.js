/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';

import { productService } from '../../service/product/product';

export function useByIdProduct(id) {
  const { getProductById } = productService();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });

  return { product, isError, isLoading, error };
}
