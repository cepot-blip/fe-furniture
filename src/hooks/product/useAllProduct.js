import { useQuery } from '@tanstack/react-query';

import { productService } from '../../service/product/product';

export default function useAllProduct() {
  const { getAllProduct } = productService();
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProduct,
  });

  return { products, isLoading, isError, refetch };
}
