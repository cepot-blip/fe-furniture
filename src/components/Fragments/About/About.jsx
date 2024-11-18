/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Button from '../../Elements/Button/Button';

function About() {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="flex w-full">
        {/* Kolom kiri untuk teks */}
        <div className="w-1/2 flex flex-col justify-start px-8">
          <div className="flex flex-col gap-8">
            <h2 className="text-6xl font-semibold">
              Elevate Your Space with Uncompromising Quality
            </h2>
            <p className="text-gray-400 text-lg">
              Experience the epitome of furniture quality. Our products are
              meticulously crafted with an unwavering commitment to excellence.
              From the finest materials to expert craftsmanship, each piece
              embodies durability, comfort, and timeless style. Elevate your
              space with the assurance of exceptional quality and lasting
              beauty.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <img src="/Checklist.svg" />
                <h3 className="text-xl font-medium">
                  Experience Unparalleled Quality
                </h3>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/Checklist.svg" />
                <h3 className="text-xl font-medium">
                  Experience Unparalleled Quality
                </h3>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/Checklist.svg" />
                <h3 className="text-xl font-medium">
                  Experience Unparalleled Quality
                </h3>
              </div>
            </div>

            <Button className="py-4 px-6 bg-black text-white font-medium max-w-[180px] rounded-xl">
              Shop now
            </Button>
          </div>
        </div>

        {/* Kolom kanan untuk gambar */}
        <div className="w-1/2 flex items-end justify-center">
          <img src="/About.png" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}

export default About;
