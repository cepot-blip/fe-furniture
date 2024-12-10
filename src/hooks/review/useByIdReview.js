/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';

import { reviewService } from '../../service/review/review';

export function useByIdReview(id) {
  const { getReviewById } = reviewService();
  const {
    data: review,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['review', id],
    queryFn: getReviewById(id),
    enabled: !!id,
  });

  return { review, isLoading, isError };
}
