/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useFormik } from 'formik';

import authMitra from '../../../schema/auth/mitra';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function FormMitra() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      user_id: '',
      company_name: '',
      business_type: '',
      address: '',
      contact_info: '',
    },

    validationSchema: authMitra,
    onSubmit: async (values) => {
      const payloaded = {
        user_id: values.user_id,
        company_name: values.company_name,
        business_type: values.business_type,
        address: values.address,
        contact_info: values.contact_info,
      };

      setLoading(true);
      alert('masuk pak eko');
      console.log('masuk pak eko', payloaded);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-full">
      <div>
        <Fields
          htmlFor="user_id"
          label="User Id"
          type="number"
          name="user_id"
          id="user_id"
          value={formik.values.user_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter our user id"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.user_id && formik.touched.user_id ? 'ring-2 ring-red-500' : ''}`}
        />
        {formik.errors.user_id && formik.touched.user_id && (
          <small className="text-red-500 text-xs">
            {formik.errors.user_id}
          </small>
        )}
      </div>

      <div>
        <Fields
          htmlFor="company_name"
          label="Company Name"
          type="text"
          name="company_name"
          id="company_name"
          value={formik.values.company_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter our user id"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.company_name && formik.touched.company_name ? 'ring-2 ring-red-500' : ''}`}
        />
        {formik.errors.company_name && formik.touched.company_name && (
          <small className="text-red-500 text-xs">
            {formik.errors.company_name}
          </small>
        )}
      </div>

      <div>
        <Fields
          htmlFor="business_type"
          label="Business Type"
          type="text"
          name="business_type"
          id="business_type"
          value={formik.values.business_type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter our user id"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.business_type && formik.touched.business_type ? 'ring-2 ring-red-500' : ''}`}
        />
        {formik.errors.business_type && formik.touched.business_type && (
          <small className="text-red-500 text-xs">
            {formik.errors.business_type}
          </small>
        )}
      </div>

      <div>
        <Fields
          htmlFor="address"
          label="Address"
          type="text"
          name="address"
          id="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter our user id"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.address && formik.touched.address ? 'ring-2 ring-red-500' : ''}`}
        />
        {formik.errors.address && formik.touched.address && (
          <small className="text-red-500 text-xs">
            {formik.errors.address}
          </small>
        )}
      </div>

      <div>
        <Fields
          htmlFor="contact_info"
          label="Contact Info"
          type="text"
          name="contact_info"
          id="contact_info"
          value={formik.values.contact_info}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter our user id"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.contact_info && formik.touched.contact_info ? 'ring-2 ring-red-500' : ''}`}
        />
        {formik.errors.contact_info && formik.touched.contact_info && (
          <small className="text-red-500 text-xs">
            {formik.errors.contact_info}
          </small>
        )}
      </div>

      <Button
        type="submit"
        className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold"
      >
        {loading ? 'Loading...' : 'Register Mitra'}
      </Button>
    </form>
  );
}

export default FormMitra;
