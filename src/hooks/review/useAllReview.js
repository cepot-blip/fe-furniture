/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable no-undef */
import { useQuery } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { reviewService } from '../../service/review/review';

export const useAllReview = () => {
  const { getAllReview } = reviewService();

  const {
    data: reviews = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['reviews'],
    queryFn: getAllReview,
  });

  return { reviews, isLoading, isError, refetch };
};
