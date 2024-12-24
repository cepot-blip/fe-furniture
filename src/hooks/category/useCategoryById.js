import { useQuery } from '@tanstack/react-query';

import { categoryService } from '../../service/category/category';

export default function useCategoryById(id) {
  const { categoryById } = categoryService();
  const {
    data: categoryId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['categoryId', id],
    queryFn: () => categoryById(id),
    enabled: !!id,
  });

  return { categoryId, isLoading, isError };
}
