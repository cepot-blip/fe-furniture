/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import useCreateCategory from '../../../hooks/category/useCreateCategory';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function FormCategory() {
  const [loading, setLoading] = useState(false);
  const { createCtg } = useCreateCategory();

  const [formData, setFormData] = useState({
    category_name: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCreateCategorySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = {
      ctg_name: formData.category_name,
    };

    // blum kelar
    try {
      await createCtg(dataToSend);
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
        htmlFor="ctg_name"
        label="Category Name"
        id="ctg_name"
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
