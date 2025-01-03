import * as yup from 'yup';

const addressSchema = yup.object().shape({
  street: yup.string().required('Street harus di isi'),
  city: yup.string().required('City harus di isi'),
  state: yup.string().required('State harus di isi'),
  postal_code: yup.string().required('Postal Code harus di isi'),
  country: yup.string().required('Country harus di isi'),
});

export default addressSchema;
