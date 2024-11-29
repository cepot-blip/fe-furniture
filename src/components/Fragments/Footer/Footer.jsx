/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function Footer() {
  return (
    <footer className="w-full text-white py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="relative px-10 py-32 rounded-lg shadow-lg">
            <img
              src="/Footer.png"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <h1 className="text-7xl font-semibold">
                Subscribe to get attractive offers on our products
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Fields
                  placeholder="E.g. youremail@mail.com"
                  className="px-4 py-5 border border-gray-300 rounded-lg w-full lg:w-96"
                />
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
          <div>
            <img src="/logo.svg" className="mb-4 mx-auto md:mx-0" />
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          {Array(4)
            .fill(null)
            .map((_, pler) => (
              <div key={pler} className="flex flex-col gap-2">
                <h1 className="font-semibold text-lg text-black">Category</h1>
                {['Living Room', 'Bedroom', 'Dining', 'Office'].map((item) => (
                  <Link key={item} className="text-gray-700">
                    {item}
                  </Link>
                ))}
              </div>
            ))}
        </div>

        <div className="mt-12 text-sm text-gray-500 border-t border-t-gray-500">
          <h2 className="pt-4">
            © {new Date().getFullYear()} Furniture Cmuah. All Rights Reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
