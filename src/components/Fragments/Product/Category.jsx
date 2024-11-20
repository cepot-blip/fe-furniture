/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

function Category() {
  const itemCtg = [
    {
      id: 1,
      name: 'Chair',
      thumbnail: '/Chair.png',
    },
    {
      id: 2,
      name: 'Sofa',
      thumbnail: '/Sofa.png',
    },
    {
      id: 3,
      name: 'Table',
      thumbnail: '/Table.png',
    },
    {
      id: 4,
      name: 'Bed',
      thumbnail: '/Bed.png',
    },
    {
      id: 5,
      name: 'Wardrobe',
      thumbnail: '/Wardrobe.png',
    },
    {
      id: 6,
      name: 'Office Desk',
      thumbnail: '/Office-Desk.png',
    },
  ];
  return (
    <section className="w-full flex justify-center">
      <div className="grid grid-cols-3 gap-12">
        {itemCtg.map((item) => (
          <div className="flex flex-col items-center text-center" key={item.id}>
            <Link className="w-[500px] bg-gray-100 rounded-lg hover:shadow-sm">
              <Card className="flex items-center justify-center">
                <div className="w-2/6 flex flex-col items-start">
                  <Card.Body className="font-semibold text-2xl mb-3">
                    {item.name}
                  </Card.Body>
                  <Card.Body>
                    <Button className="py-2 px-3 bg-white border border-gray-100 text-black hover:bg-gray-200 transition-all rounded-lg">
                      See More
                    </Button>
                  </Card.Body>
                </div>

                <div className="w-1/2">
                  <Card.Body className="w-full h-auto object-cover rounded-lg">
                    <img src={item.thumbnail} />
                  </Card.Body>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
