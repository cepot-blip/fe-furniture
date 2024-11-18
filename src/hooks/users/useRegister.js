/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { userService } from '../../service/user/userService';

export default function useRegister() {
  const navigate = useNavigate();
  const { createUser } = userService();

  const {
    mutate: register,
    isLoading,
    isError,
  } = useMutation({
    // mutasi data untuk kasih response ke server
    mutationFn: ({ name, email, password, phone_number, role }) => {
      createUser({ name, email, password, phone_number, role });
    },
    onSuccess: (data) => {
      console.log('Registration successful:', data);
      Notiflix.Notify.success('Register berhasil! Selamat datang');
      navigate('/login');
    },
    onError: (error) => {
      console.error('Terdapat kesalahan saat register user:', error);
      Notiflix.Notify.failure(
        'Mohon perika kembali, jika anda belum mendapatkan token. Pilih role Admin',
      );
    },
  });
  return { register, isLoading, isError };
}
