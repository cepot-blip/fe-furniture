/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Notiflix from 'notiflix';

import { useCreateAddress } from '../../../hooks/address/useCreateAddress';
import { useUpdateAddress } from '../../../hooks/address/useUpdateAddress';
import { addressStore } from '../../../redux/reducers/addressReducer';
import addressSchema from '../../../schema/address';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';
import SelectOpt from '../../Elements/Option/Option';
import ModalShipping from '../Shipping/ModalShipping';

function AddressForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const { createAddressMutation } = useCreateAddress();
  const { updateAddressMutation } = useUpdateAddress();
  const data = JSON.parse(localStorage.getItem('data'));

  const address = JSON.parse(localStorage.getItem('address')); // test untuk 1 user = 1 address

  // console.log('datauser:', data);

  const formik = useFormik({
    initialValues: {
      street: '', // Pastikan 'street' ada atau set ke string kosong
      city: '',
      state: '',
      postal_code: '',
      country: '',
    },
    validationSchema: addressSchema,
    onSubmit: async (values) => {
      const dataToSend = {
        ...values,
      };

      const existingAddress = data?.address;

      if (existingAddress) {
        Notiflix.Notify.failure('You already have an existing address!');
        return;
      }

      setIsLoading(true);
      try {
        if (!address) {
          const dataAddress = {
            user_id: data.id,
            ...dataToSend,
          };
          await createAddressMutation(dataAddress);
          dispatch(addressStore(dataToSend));
        } else {
          const dataAddress = {
            id: address.id,
            user_id: data.id,
            ...dataToSend,
          };
          await updateAddressMutation(dataAddress);
          dispatch(addressStore(dataToSend));
        }

        Notiflix.Notify.success('Success create Address!');
        setModalOpen(true);
      } catch (error) {
        console.error('Error saat membuat alamat:', error);
        Notiflix.Notify.failure('Gagal menambahkan alamat!');
      } finally {
        setIsLoading(false);
      }
    },
  });

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-6 w-full pt-5"
      >
        <Fields
          htmlFor="street"
          label="Street"
          id="street"
          placeholder="Enter street"
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm"
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.street && formik.errors.street && (
          <small className="text-red-500">{formik.errors.street}</small>
        )}

        <Fields
          htmlFor="city"
          label="City"
          id="city"
          placeholder="Enter city"
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.city && formik.errors.city && (
          <small className="text-red-500">{formik.errors.city}</small>
        )}

        <Fields
          htmlFor="state"
          label="State or Propvince"
          id="state"
          placeholder="Enter state"
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm"
          value={formik.values.state}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.state && formik.errors.state && (
          <small className="text-red-500">{formik.errors.state}</small>
        )}

        <Fields
          htmlFor="postal_code"
          label="Postal Code"
          id="postal_code"
          placeholder="Enter postal code"
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm"
          value={formik.values.postal_code}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.postal_code && formik.errors.postal_code && (
          <small className="text-red-500">{formik.errors.postal_code}</small>
        )}

        <div>
          <SelectOpt
            name="country"
            title="Country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm cursor-pointer text-gray-500 bg-white"
            label="Select Country"
            options={[
              { value: 'Indonesia', label: 'Indonesia' },
              { value: 'United States', label: 'United States (Rp. 10000)' },
              { value: 'India', label: 'India (Rp. 8000)' },
            ]}
          />
          {formik.touched.country && formik.errors.country && (
            <small className="text-red-500">{formik.errors.country}</small>
          )}
        </div>

        <div className="flex gap-3">
          <Button
            className="text-white w-full bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-lg px-5 py-3 hover:shadow-lg cursor-pointer transition-all"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Loading..' : 'Continue Address to Shipping'}
          </Button>
        </div>
      </form>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-5 w-[500px] z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalShipping />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddressForm;
