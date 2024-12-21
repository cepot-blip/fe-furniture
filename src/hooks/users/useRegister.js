/* eslint-disable no-return-await */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { userService } from '../../service/user/user';

export default function useRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createUser } = userService(dispatch);

  const {
    mutate: register,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: async ({
      id,
      name,
      email,
      password,
      phone_number,
      role,
      token,
    }) =>
      await createUser({
        id,
        name,
        email,
        password,
        phone_number,
        role,
        token,
      }),

    onSuccess: (data) => {
      console.log('Registration successfuly:', data);
      Notiflix.Notify.success('Register berhasil! Selamat datang');
      navigate('/login');
    },
    onError: (error) => {
      console.error('Terdapat kesalahan saat register user:', error);
      Notiflix.Notify.failure(
        'Mohon perika kembali, jika anda belum mendapatkan token. Pilih role Admin',
      );
      isLoading(false);
    },
  });
  return { register, isLoading, isError };
}
