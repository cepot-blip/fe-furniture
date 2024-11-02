/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Notiflix from 'notiflix';

import authRegister from '../../../schema/auth/register';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function FormRegister() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: authRegister,
    onSubmit: (values) => {
      const userData = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      // Simpan data pengguna ke local storage
      localStorage.setItem('userFurniture', JSON.stringify(userData));
      Notiflix.Notify.success('Registrasi berhasil! Selamat datang!');

      setTimeout(() => {
        navigate('/login');
      }, 2000);

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
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.username && formik.touched.username ? 'ring-2 ring-red-500' : ''}`}
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
          className={`block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.email && formik.touched.email ? 'ring-2 ring-red-500' : ''}`}
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
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.password && formik.touched.password ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {formik.errors.password && formik.touched.password && (
          <small className="text-red-500 text-xs">
            {formik.errors.password}
          </small>
        )}
      </div>

      <div>
        <Fields
          htmlFor="confirmPassword"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Confirm your password"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <small className="text-red-500 text-xs">
            {formik.errors.confirmPassword}
          </small>
        )}
      </div>

      <Button
        type="submit"
        className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold"
      >
        Register
      </Button>
    </form>
  );
}

export default FormRegister;
