/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

import Card from '../../../components/Fragments/Card/Card';
import Footer from '../../../components/Fragments/Footer/Footer';
import Navbar from '../../../components/Fragments/Navbar/Navbar';
import Sidebar from '../../../components/Fragments/Sidebar/Sidebar';
import useCategoryById from '../../../hooks/category/useCategoryById';

function CategoryDetailId() {
  const { id } = useParams();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { categoryId } = useCategoryById(id);
  const [isLoading, setIsLoading] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  console.log('categoryId:', categoryId);
  // console.log('categoryId:', categoryId.data);

  const products = categoryId?.data?.products || [];

  return (
    <main className="flex flex-col mx-auto max-w-[1300px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />

      <div className="w-full flex py-8 flex-col gap-10">
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
            <Link
              className="py-2 px-3 rounded-full border border-black"
              to="/category"
            >
              All Product
            </Link>

            <Link className="text-gray-500">Chair</Link>
            <Link className="text-gray-500">Table</Link>
            <Link className="text-gray-500">Bed</Link>
            <Link className="text-gray-500 underline">See All</Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card className="border rounded-lg p-4 h-auto flex flex-col justify-between">
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card.Header className="mb-4">
                  <img
                    src={product.image_url}
                    className="w-full h-60 object-contain rounded-lg"
                  />
                </Card.Header>
                <Card.Body className="mb-4">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </Card.Body>
              </Link>

              <Card.Footer className="flex justify-between items-center">
                <p className="font-semibold">Rp {product.price}</p>
                <ShoppingCart
                  className="text-lg cursor-pointer"
                  onClick={() => handleProductToCart(product)}
                />
              </Card.Footer>
            </Card>
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default CategoryDetailId;
