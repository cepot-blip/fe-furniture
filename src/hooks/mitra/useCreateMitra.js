/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-return-await */
/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { mitraService } from '../../service/mitra/mitra';
import useUserId from '../users/useUserId';

export default function useCreateMitra() {
  const id_user = useSelector((state) => state.auth.userAuth);
  const navigate = useNavigate();
  const { createMitra } = mitraService();
  // const { user } = useUserId();
  console.log('user', id_user);

  // const user = user_id;

  const {
    mutate: createMitraMutation,
    isError,
    isSuccess,
    isLoading,
  } = useMutation({
    mutationFn: async ({
      user_id,
      company_name,
      business_type,
      address,
      contact_info,
    }) =>
      await createMitra({
        user_id,
        company_name,
        business_type,
        address,
        contact_info,
      }),
    onSuccess: (data) => {
      console.log('Create Mitra Successfully', data);
      Notiflix.Notify.success('Membuat Mitra berhasil!');
      navigate('/');
    },
    onError: (error) => {
      console.error('Terdapat kesalahan saat membuat mitra:', error.message);
      Notiflix.Notify.failure(
        'Gagal membuat mitra. Periksa kembali data yang dimasukkan.',
      );
    },
  });

  return { createMitraMutation, isError, isSuccess, isLoading };
}
