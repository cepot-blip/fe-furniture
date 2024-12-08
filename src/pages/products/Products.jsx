/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ShoppingCart } from 'lucide-react';

import Card from '../../components/Fragments/Card/Card';
import Footer from '../../components/Fragments/Footer/Footer';
import Brands from '../../components/Fragments/Hero/Brands';
import Hero from '../../components/Fragments/Hero/Hero';
import Navbar from '../../components/Fragments/Navbar/Navbar';
import FormProduct from '../../components/Fragments/Product/FormProduct';
import Sidebar from '../../components/Fragments/Sidebar/Sidebar';
import useAllProduct from '../../hooks/product/useAllProduct';
import { useCreateProduct } from '../../hooks/product/useCreateProduct';

function Products() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products, refetch } = useAllProduct();
  console.log(products);
  const { createProd } = useCreateProduct();

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateProduct = async (productData) => {
    await createProd(productData);
    refetch();
  };

  return (
    <main className="flex flex-col mx-auto max-w-[1500px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />
      <Hero>
        <Brands />
      </Hero>

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
        {products?.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <Card className="border rounded-lg p-4">
              <Card.Header className="mb-4">
                <img
                  src={item.image_url}
                  className="w-full h-60 object-contain rounded-lg"
                />
              </Card.Header>
              <Card.Body className="mb-4">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
              </Card.Body>
              <Card.Footer className="flex justify-between items-center">
                <p className="font-semibold">Rp {item.price}</p>
                <ShoppingCart
                  className="text-lg cursor-pointer"
                  // onClick={handleProductToCart}
                />
              </Card.Footer>
            </Card>
          </Link>
        ))}

        {/* modal form */}
        <div
          className="border rounded-lg p-6 bg-white cursor-pointer"
          onClick={openModal}
        >
          <div className="w-full py-16 border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center gap-5 hover:border-orange-600 transition-colors">
            <Plus className="text-gray-500 text-6xl" />
            <h3 className="text-sm font-base text-gray-400">Create Product</h3>
          </div>
        </div>

        {/* overlay */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white p-8 rounded-lg w-[40%]"
              onClick={(e) => e.stopPropagation()} // close overlay
            >
              <h3 className="text-2xl font-semibold mb-6">Create Product</h3>
              <FormProduct onSubmit={handleCreateProduct} />
              {/* <Button className="mt-4 w-full" onClick={closeModal}>
                Close
              </Button> */}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

export default Products;