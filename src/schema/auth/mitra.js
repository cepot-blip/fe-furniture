import * as yup from 'yup';

const authMitra = yup.object().shape({
  user_id: yup
    .number()
    .required('User Id harus diisi')
    .min(2, 'User Id maksimal 2 angka'),

  company_name: yup.string().required('Company Name harus diisi'),

  business_type: yup.string().required('Bussines Type harus diisi'),

  address: yup.string().required('Address harus di isi'),

  contact_info: yup.string().required('Contact Info harus diisi'),
});

export default authMitra;
