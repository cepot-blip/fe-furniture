/* eslint-disable no-trailing-spaces */
/* eslint-disable operator-linebreak */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Notiflix from 'notiflix';

import authLogin from '../../../schema/auth/login';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function FormLogin() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: authLogin,
    onSubmit: (formValues) => {
      const userData = JSON.parse(localStorage.getItem('userFurniture'));
      if (userData) {
        if (
          userData.username === formValues.username &&
          userData.email === formValues.email &&
          userData.password === formValues.password
        ) {
          Notiflix.Notify.success(
            `Hallo ${formValues.username}, selamat datang kembali`,
          );
          setTimeout(() => {
            navigate('/home');
          }, 2000);
        } else {
          Notiflix.Notify.failure('Login gagal, mohon periksa kembali');
        }
      } else {
        Notiflix.Notify.failure('Tidak ada data user yang terdaftar');
      }

      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-full">
      <div>
        <Fields
          htmlFor="username"
          label="Username"
          type="text"
          name="username"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your username"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${
            formik.errors.username && formik.touched.username
              ? 'ring-2 ring-red-500'
              : ''
          }`}
          autoComplete="off"
        />
        {formik.errors.username && formik.touched.username && (
          <small className="text-red-500 text-xs">
            {formik.errors.username}
          </small>
        )}
      </div>

      <div>
        <Fields
          htmlFor="email"
          label="Email"
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your email"
          className={`block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${
            formik.errors.email && formik.touched.email
              ? 'ring-2 ring-red-500'
              : ''
          }`}
          autoComplete="off"
        />
        {formik.errors.email && formik.touched.email && (
          <small className="text-red-500 text-xs">{formik.errors.email}</small>
        )}
      </div>

      <div>
        <Fields
          htmlFor="password"
          label="Password"
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your password"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${
            formik.errors.password && formik.touched.password
              ? 'ring-2 ring-red-500'
              : ''
          }`}
          autoComplete="off"
        />
        {formik.errors.password && formik.touched.password && (
          <small className="text-red-500 text-xs">
            {formik.errors.password}
          </small>
        )}
      </div>

      <Button
        type="submit"
        className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold"
      >
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
