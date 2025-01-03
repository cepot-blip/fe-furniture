/* eslint-disable no-alert */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  DollarSign,
  Image,
  Layers,
  Package,
  PlusCircle,
  Tag,
} from 'lucide-react';
import Notiflix from 'notiflix';

import useAllProduct from '../../../hooks/product/useAllProduct';
import { useCreateProduct } from '../../../hooks/product/useCreateProduct';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function FormProduct() {
  const [loading, setLoading] = useState(false);
  const { createProd } = useCreateProduct();
  const { refetch } = useAllProduct();
  const navigate = useNavigate();

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

    const checkRole = JSON.parse(localStorage.getItem('data'));
    const role = checkRole?.role;

    if (role !== 'Mitra') {
      setLoading(false);
      Notiflix.Notify.failure('Anda tidak memiliki hak akses untuk fitur ini!');

      navigate('/');
      return;
    }

    const dataToSend = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10),
      category_id: parseInt(formData.category_id, 10),
    };

    try {
      await createProd(dataToSend);
      refetch();
    } catch (error) {
      console.log(error.message || 'Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  // const dataMitra = JSON.parse(localStorage.getItem('mitraData'));

  // console.log('dataMitra:', dataMitra);

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-10 flex items-center gap-2">
        <PlusCircle className="text-blue-600" /> Create New Product
      </h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleCreateProductSubmit}
      >
        <Fields
          htmlFor="name"
          label="Name"
          id="name"
          placeholder="Enter product name"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          icons={<Tag className="text-gray-500 h-3 w-3" />}
          value={formData.name}
          onChange={handleInputChange}
        />
        <Fields
          htmlFor="description"
          label="Description"
          id="description"
          placeholder="Enter product description"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          icons={<Layers className="text-gray-500" />}
          value={formData.description}
          onChange={handleInputChange}
        />
        <Fields
          htmlFor="price"
          label="Price"
          id="price"
          placeholder="Enter product price"
          type="number"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          icons={<DollarSign className="text-gray-500" />}
          value={formData.price}
          onChange={handleInputChange}
        />
        <Fields
          htmlFor="stock"
          label="Stock"
          id="stock"
          placeholder="Enter product stock"
          type="number"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          icons={<Box className="text-gray-500" />}
          value={formData.stock}
          onChange={handleInputChange}
        />
        <Fields
          htmlFor="category_id"
          label="Category ID"
          id="category_id"
          placeholder="Enter category ID"
          type="number"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          icons={<Package className="text-gray-500" />}
          value={formData.category_id}
          onChange={handleInputChange}
        />
        {/* <Fields
          htmlFor="mitra_id"
          label="Mitra ID"
          id="mitra_id"
          placeholder="Enter mitra ID"
          type="number"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          icons={<Package className="text-gray-500" />}
          value={formData.mitra_id}
          onChange={handleInputChange}
        /> */}
        <Fields
          htmlFor="image_url"
          label="Image URL"
          id="image_url"
          placeholder="https://example.com/image.jpg"
          type="url"
          className="px-3 py-3 border border-gray-300 rounded-lg shadow-sm mt-1 w-full"
          icons={<Image className="text-gray-500" />}
          value={formData.image_url}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold flex items-center justify-center gap-2"
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            <>
              <PlusCircle /> Create Product
            </>
          )}
        </Button>
      </form>
    </section>
  );
}

export default FormProduct;
