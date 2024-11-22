/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

function Sidebar(props) {
  const { isVisible, onClose } = props;
  const dummyProd = [
    {
      cart_id: 1,
      name: 'Bangku Sekolah',
      price: 200000,
      stock: 4,
      category_id: 1,
      img_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamU8svKQxBJ5gnpBdkySaiYK1DE32qrjmEQ&s',
    },
    {
      cart_id: 2,
      name: 'Meja Belajar',
      price: 300000,
      stock: 2,
      category_id: 2,
      img_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamU8svKQxBJ5gnpBdkySaiYK1DE32qrjmEQ&s',
    },
    {
      cart_id: 3,
      name: 'Lemari Buku',
      price: 500000,
      stock: 1,
      category_id: 3,
      img_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamU8svKQxBJ5gnpBdkySaiYK1DE32qrjmEQ&s',
    },
  ];

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-[25%] bg-white shadow-xl text-gray-800 transform ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-10`}
    >
      <div className="w-full h-full flex flex-col">
        {/*  header sidebar */}
        <div className="p-6 flex justify-between items-center border-b-2 border-gray-300">
          <h2 className="text-xl font-semibold">Products Cart</h2>
          <Button className="text-red-500 text-xs" onClick={onClose}>
            Close
          </Button>
        </div>

        {/* content cart */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex-grow overflow-y-auto">
            {dummyProd.map((item) => (
              <Card
                key={item.cart_id}
                className="border-b border-gray-300 py-4 flex gap-4"
              >
                <Card.Header className="w-24 h-24">
                  <img
                    src={item.img_url}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </Card.Header>

                <Card.Body className="flex-grow">
                  <h4 className="font-medium text-lg">{item.name}</h4>
                  <p className="text-gray-600">
                    Rp {item.price.toLocaleString('id-ID')}
                  </p>
                </Card.Body>

                <Card.Footer className="flex items-center justify-end">
                  <Button className="text-blue-500 text-xs">Edit</Button>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </div>

        {/* cta checkout */}
        <div className="p-4 border-t-2 border-gray-300">
          <Button className="text-white w-full bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-lg px-5 py-3  hover:shadow-lg cursor-pointer">
            Checkout Now
          </Button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
