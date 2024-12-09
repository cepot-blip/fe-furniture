/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

import Button from '../../components/Elements/Button/Button';
import Card from '../../components/Fragments/Card/Card';
import Footer from '../../components/Fragments/Footer/Footer';
import Navbar from '../../components/Fragments/Navbar/Navbar';
import ReviewProduct from '../../components/Fragments/Product/ReviewProduct';
import Sidebar from '../../components/Fragments/Sidebar/Sidebar';
import { useByIdProduct } from '../../hooks/product/useByIdProduct';

function DetailsProduct() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { id } = useParams();
  const { product, isLoading, isError } = useByIdProduct(id);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load product details</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <main className="flex flex-col mx-auto max-w-[1500px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />

      <div className="w-full flex py-8">
        <div className="flex w-full gap-8 items-center px-5">
          <div className="flex-1">
            <Card className="flex flex-col items-center gap-6 rounded-lg">
              <Card.Body className="border border-gray-300 rounded-lg">
                <img
                  src={product?.image_url}
                  className="w-full h-auto rounded-lg shadow-md p-2"
                />
              </Card.Body>
            </Card>
          </div>

          <div className="flex-1">
            <div className=" flex flex-col gap-52">
              <Card className="flex flex-col gap-6 h-full">
                <Card.Header className="text-6xl font-semibold text-gray-800">
                  {product?.name}
                </Card.Header>
                <Card.Body className="text-md text-gray-500">
                  Stock: {product?.stock}
                </Card.Body>
                <Card.Body className="text-xl text-gray-900 font-semibold flex justify-between items-center">
                  Price: ${product?.price}
                  <div className="flex items-center gap-2">
                    <Star size={26} className="text-orange-500" />
                    <Star size={26} className="text-orange-500" />
                    <Star size={26} className="text-orange-500" />
                    <Star size={26} className="text-orange-500" />
                    <Star size={26} className="text-orange-500" />
                  </div>
                </Card.Body>
                <Card.Body className="text-gray-600 text-xl">
                  <p>{product?.description}</p>
                </Card.Body>
              </Card>

              <div className="flex flex-col gap-5">
                <div className="flex gap-10 items-center">
                  <div className="flex items-center gap-4 border border-gray-300 rounded-lg py-5 px-14">
                    <Button>-</Button>
                    <span className="text-lg">qty</span>
                    <Button>+</Button>
                  </div>

                  <Button className="py-5 px-14 bg-[#3AA39F] text-white font-semibold rounded-lg">
                    Add to Cart
                  </Button>
                </div>
                <p>Free 3-5 day shipping • Tool-free assembly • 30-day trial</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReviewProduct />

      <Footer />
    </main>
  );
}

export default DetailsProduct;
