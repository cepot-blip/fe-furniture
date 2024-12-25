/* eslint-disable react/no-unknown-property */
/* eslint-disable no-console */
import React, { useState } from 'react';

import useAllProduct from '../../../hooks/product/useAllProduct';
import { useCreateProduct } from '../../../hooks/product/useCreateProduct';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function FormProduct() {
  const [loading, setLoading] = useState(false);
  const { createProd } = useCreateProduct();
  const { refetch } = useAllProduct();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category_id: '',
    mitra_id: '',
    image_url: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCreateProductSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10),
      category_id: parseInt(formData.category_id, 10),
      mitra_id: parseInt(formData.mitra_id, 10),
    };

    try {
      await createProd(dataToSend);
      // onSubmit(refetch());
      refetch();
    } catch (error) {
      console.log(error.message && 'Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <form
        className="flex flex-col gap-2 w-full"
        onSubmit={handleCreateProductSubmit}
      >
        <Fields
          htmlFor="name"
          label="Name"
          id="name"
          placeholder="Enter name product"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Fields
          htmlFor="description"
          label="Description"
          id="description"
          placeholder="Enter description product"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          value={formData.description}
          onChange={handleInputChange}
        />
        <Fields
          htmlFor="price"
          label="Price"
          id="price"
          placeholder="Enter price product"
          type="number"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          value={formData.price}
          onChange={handleInputChange}
        />
        <Fields
          htmlFor="stock"
          label="Stock"
          id="stock"
          placeholder="Enter stock product"
          type="number"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          value={formData.stock}
          onChange={handleInputChange}
        />
        <Fields
          htmlFor="category_id"
          label="Category ID"
          id="category_id"
          placeholder="Enter category ID product"
          type="number"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          value={formData.category_id}
          onChange={handleInputChange}
        />
        <Fields
          htmlFor="mitra_id"
          label="Mitra ID"
          id="mitra_id"
          placeholder="Enter mitra ID"
          type="number"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          value={formData.mitra_id}
          onChange={handleInputChange}
        />
        <Fields
          htmlFor="image_url"
          label="Image URL"
          id="image_url"
          placeholder="https://example.com/image.jpg"
          type="url"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          value={formData.image_url}
          onChange={handleInputChange}
        />

        {/* Submit button */}
        <Button
          type="submit"
          className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold"
        >
          {loading ? 'Loading...' : 'Create Product'}
        </Button>
      </form>
    </section>
  );
}

export default FormProduct;
