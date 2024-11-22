/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

function ItemProduct() {
  const dummyProd = [
    {
      cart_id: 1,
      name: 'Bangku Sekolah',
      price: 200000,
      description: 'Ini adalah bangku sekolah',
      stock: 4,
      category_id: 1,
      img_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamU8svKQxBJ5gnpBdkySaiYK1DE32qrjmEQ&s',
    },
    {
      cart_id: 2,
      name: 'Meja Belajar',
      price: 300000,
      description: 'Ini adalah bangku sekolah',
      stock: 2,
      category_id: 2,
      img_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamU8svKQxBJ5gnpBdkySaiYK1DE32qrjmEQ&s',
    },
    {
      cart_id: 3,
      name: 'Lemari Buku',
      price: 500000,
      description: 'Ini adalah bangku sekolah',
      stock: 1,
      category_id: 3,
      img_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamU8svKQxBJ5gnpBdkySaiYK1DE32qrjmEQ&s',
    },
    {
      cart_id: 4,
      name: 'Lemari Buku',
      price: 500000,
      description: 'Ini adalah bangku sekolah',
      stock: 1,
      category_id: 3,
      img_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamU8svKQxBJ5gnpBdkySaiYK1DE32qrjmEQ&s',
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="w-full flex pb-3">
        <div className="flex w-1/2 justify-start items-start flex-col gap-2">
          <div className="bg-gray-200 py-2 px-3 rounded-full">
            <h4 className="text-orange-600 font-semibold">
              Checkout our Product
            </h4>
          </div>
          <h1 className="text-3xl font-semibold">Must have product</h1>
        </div>

        <div className="flex w-1/2 items-center gap-8 justify-end">
          <Link className="py-2 px-3 rounded-full border border-black">
            All Product
          </Link>

          <Link className="text-gray-500">Chair</Link>
          <Link className="text-gray-500">Table</Link>
          <Link className="text-gray-500">Bed</Link>
          <Link className="text-gray-500 underline">See All</Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        {dummyProd.map((product) => (
          <Card key={product.id} className="border rounded-lg p-4">
            <Card.Header className="mb-4">
              <img
                src={product.img_url}
                className="w-full h-60 object-contain rounded-lg"
              />
            </Card.Header>
            <Card.Body className="mb-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </Card.Body>
            <Card.Footer className="flex justify-between items-center">
              <p className="font-semibold">Rp {product.price}</p>
              <ShoppingCart className="text-lg cursor-pointer" />
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ItemProduct;
