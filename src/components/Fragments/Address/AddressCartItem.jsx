/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Trash } from 'lucide-react';

import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

function AddressCartItem() {
  const dummyCartItem = [
    {
      id: 1,
      name: 'Meja Makan',
      category: 'Chairs',
      image_url:
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2024/2/1/729b1a99-7db7-4788-b2f0-e73e7e4f54af.jpg',
      price: '12.000.000',
    },
    {
      id: 2,
      name: 'Meja Makan',
      category: 'Chairs',
      image_url:
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2024/2/1/729b1a99-7db7-4788-b2f0-e73e7e4f54af.jpg',
      price: '12.000.000',
    },
    {
      id: 3,
      name: 'Meja Makan',
      category: 'Chairs',
      image_url:
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2024/2/1/729b1a99-7db7-4788-b2f0-e73e7e4f54af.jpg',
      price: '12.000.000',
    },
  ];
  return (
    <section className="w-full pt-5">
      <div className="flex flex-col gap-3 pb-5">
        {dummyCartItem.map((item) => (
          <Card
            key={item.id}
            className="w-full py-2 px-5 flex border border-gray-300 rounded-lg items-center justify-between"
          >
            <Card.Header className="">
              <img src={item.image_url} className="w-36 h-3w-36" />
            </Card.Header>
            <Card.Body className="flex flex-col">
              <h2 className="font-medium">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
            </Card.Body>

            <Card.Body className="text-normal text-gray-500">
              <h3>Rp. {item.price}</h3>
            </Card.Body>

            <Card.Footer className="flex gap-3 flex-col items-center">
              <div className="flex items-center gap-4 border border-gray-300 rounded-md py-1 px-3">
                <Button>-</Button>
                <span className="text-sm">qty</span>
                <Button>+</Button>
              </div>

              {/* <Trash className="w-5 h-5 cursor-pointer hover:text-red-600 transition-all" /> */}
              {/* <p className="text-normal text-gray-500">Remove</p> */}
            </Card.Footer>
          </Card>
        ))}
      </div>
      {/* <Button className="text-white w-full bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-lg px-5 py-3 hover:shadow-lg cursor-pointer transition-all">
        Continue Order
      </Button> */}
    </section>
  );
}

export default AddressCartItem;
