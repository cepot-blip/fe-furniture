/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

import useAllCategory from '../../../hooks/category/useAllCategory';
import useCreateCategory from '../../../hooks/category/useCreateCategory';
import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

import FormCategory from './FormCategory';

function Category() {
  const [isModalOpen, setIsModalOpen] = useState();
  const { category, isLoading, isError, refetch } = useAllCategory();
  const { createCategoryMutation } = useCreateCategory();

  console.log(category);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateCategory = async (ctgData) => {
    await createCategoryMutation(ctgData);
    refetch();
  };

  return (
    <section className="w-full flex justify-center">
      <div className="grid grid-cols-3 gap-12">
        {category?.map((item) => (
          <div className="flex flex-col items-center text-center" key={item.id}>
            <Link className="w-[500px] bg-gray-100 rounded-lg hover:shadow-sm">
              <Card className="flex items-center justify-center">
                <div className="w-2/6 flex flex-col items-start">
                  <Card.Body className="font-semibold text-2xl mb-3">
                    {item.category_name}
                  </Card.Body>
                  <Card.Body>
                    <Button className="py-2 px-3 bg-white border border-gray-100 text-black hover:bg-gray-200 transition-all rounded-lg">
                      See More
                    </Button>
                  </Card.Body>
                </div>

                <div className="w-1/2">
                  <Card.Body className="w-full h-auto object-cover rounded-lg">
                    <img src="/Wardrobe.png" />
                  </Card.Body>
                </div>
              </Card>
            </Link>
          </div>
        ))}

        <div
          className="border rounded-lg p-6 bg-white cursor-pointer"
          onClick={openModal}
        >
          <div className="w-full py-10 border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center gap-5 hover:border-orange-600 transition-colors">
            <Plus className="text-gray-500 text-6xl" />
            <h3 className="text-sm font-base text-gray-400">Create Category</h3>
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
              <FormCategory onSubmit={handleCreateCategory} />
              {/* <Button className="mt-4 w-full" onClick={closeModal}>
                Close
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Category;
