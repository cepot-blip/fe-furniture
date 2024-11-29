/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';

import { productService } from '../../service/product/product';

export function useByIdProduct(id) {
  const { getProductById } = productService();
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });

  return { product, isError, isLoading };
}
