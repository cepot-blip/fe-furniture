/* eslint-disable no-console */
import React from 'react';
import { useParams } from 'react-router-dom';

import { useByIdProduct } from '../../../hooks/product/useByIdProduct';

function DetailsProduct() {
  const { id } = useParams();
  const { product, isLoading, isError } = useByIdProduct(id);

  console.log('Product ID:', id);
  console.log('Product data:', product);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load product details</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-auto"
      />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}

export default DetailsProduct;
