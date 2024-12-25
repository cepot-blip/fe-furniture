import { useQuery } from '@tanstack/react-query';

import { categoryService } from '../../service/category/category';

export default function useAllCategory() {
  const { getAllCategory } = categoryService();

  const {
    data: category,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['category'],
    queryFn: getAllCategory,
  });

  return { category, isError, isLoading, refetch };
}
