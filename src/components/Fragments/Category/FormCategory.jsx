/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Notiflix from 'notiflix';

import useCreateCategory from '../../../hooks/category/useCreateCategory';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function FormCategory() {
  const [loading, setLoading] = useState(false);
  const { createCategoryMutation } = useCreateCategory();

  const [formData, setFormData] = useState({
    category_name: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateCategorySubmit = async (e) => {
    e.preventDefault();

    const checkRole = JSON.parse(localStorage.getItem('data'));
    const role = checkRole?.role;

    if (role !== 'Mitra' && role !== 'Admin') {
      setLoading(false);
      Notiflix.Notify.failure('Anda tidak memiliki hak akses untuk fitur ini!');

      return;
    }

    try {
      await createCategoryMutation(formData);
    } catch (error) {
      console.log(error.message && 'Failed to create category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-6 w-full"
      onSubmit={handleCreateCategorySubmit}
    >
      <Fields
        htmlFor="category_name"
        label="Category Name"
        id="category_name"
        name="category_name"
        placeholder="Enter category name"
        className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
        value={formData.category_name}
        onChange={handleInputChange}
      />

      <Button
        type="submit"
        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold"
      >
        {loading ? 'Loading...' : 'Create Product'}
      </Button>
    </form>
  );
}

export default FormCategory;
