/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useCreateAddress } from '../../../hooks/address/useCreateAddress';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function AddressForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
  });
  const { createAddressMutation } = useCreateAddress();
  const data = JSON.parse(localStorage.getItem('data'));

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setIsLoading(true);
  };
  const addresFromRedux = useSelector((state) => state.address);
  const handleCreateAddress = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
    };

    console.log(dataToSend);
    try {
      await createAddressMutation({ user_id: data.id, ...dataToSend });

      setIsLoading(true);
    } catch (error) {
      console.error(error.message, 'Failed to create address');
    }
  };

  console.log('isi addresFromRedux', addresFromRedux);

  return (
    <form className="flex flex-col gap-6 w-full pt-5">
      <Fields
        htmlFor="street"
        label="* Street"
        id="street"
        placeholder="Enter street product"
        className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full text-sm"
        onChange={handleInputChange}
      />

      <Fields
        htmlFor="city"
        label="* City"
        id="city"
        placeholder="Enter city product"
        className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full text-sm"
        onChange={handleInputChange}
      />

      <Fields
        htmlFor="state"
        label="* State"
        id="state"
        placeholder="Enter state product"
        className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full text-sm"
        onChange={handleInputChange}
      />

      <Fields
        htmlFor="postal_code"
        label="* Postal Code"
        id="postal_code"
        placeholder="Enter Postal Code product"
        className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full text-sm"
        onChange={handleInputChange}
      />

      <Fields
        htmlFor="country"
        label="* Country"
        id="country"
        placeholder="Enter Country product"
        className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full text-sm"
        onChange={handleInputChange}
      />

      <Button
        className="text-white w-full bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-lg px-5 py-3 hover:shadow-lg cursor-pointer transition-all"
        type="submit"
        onClick={handleCreateAddress}
      >
        {isLoading ? 'Loading..' : 'Continue to checkout'}
      </Button>
    </form>
  );
}

export default AddressForm;
