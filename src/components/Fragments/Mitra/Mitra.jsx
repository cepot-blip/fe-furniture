/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket } from 'lucide-react';

import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

function Mitra() {
  const navigate = useNavigate();
  const mitraService = [
    {
      id: 1,
      img: './komisi.png',
      title: 'Harga & Komisi Terbaik',
      body: 'Mitra Furniture akan mendapatkan harga termurah & cashback terbesar',
    },
    {
      id: 1,
      img: './lengkap.png',
      title: 'Lengkap',
      body: 'Mitra Furniture dapat menjual berbagai produk furniture',
    },
    {
      id: 1,
      img: './Aman.png',
      title: 'Mudah & Aman',
      body: 'Mitra Furniture dapat melakukan seluruh transaksi dalam satu aplikasi mitra seraca aman',
    },
  ];

  const handleNavigate = () => {
    navigate('/daftar-mitra');
  };

  return (
    <section className="w-full py-20">
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col gap-3 items-center pb-6">
          <div className="bg-gray-200 py-2 px-3 rounded-full">
            <h4 className="text-orange-600 font-semibold">Gabung Mitra</h4>
          </div>
          <h2 className="text-5xl font-semibold text-center">
            Gabung Mitra Furniture <br /> Usaha Furniturmu Sekamik Untung
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl text-center">
            Aplikasi untuk penjualan produk pulsa, paket data, token PLN,
            voucher game dan produk digital lainnya. Lengkap, mudah, aman &
            menguntungkan!
          </p>

          <div className="flex gap-2">
            <Button
              className="bg-orange-600 text-white font-medium px-8 py-5 flex gap-2 items-center rounded-lg"
              onClick={handleNavigate}
            >
              Gabung Menjadi Mitra
              <Rocket />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 pt-6 ">
          {mitraService.map((e) => (
            <Card
              className="bg-gray-50 p-10 items-center flex flex-col gap-6 max-w-[400px] rounded-lg"
              key={e.id}
            >
              <Card.Header>
                <img src={e.img} />
              </Card.Header>
              <Card.Body>
                <h1 className="text-xl font-semibold">{e.title}</h1>
              </Card.Body>
              <Card.Footer>
                <p className="text-sm text-gray-500 text-center max-w-[250px] mx-auto">
                  {e.body}
                </p>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mitra;
