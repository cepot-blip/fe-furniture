/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../Elements/Button/Button';

function Hero({ children }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/products');
  };
  return (
    <section className="w-full py-8 z-30">
      <div className="flex justify-between items-center mx-auto max-w-[1400px]">
        {/* Text Section */}
        <div className="flex-1 pr-12">
          <h1 className="text-[74px] font-bold mb-4 text-gray-900">
            Perfect <br />
            Harmony: <br />
            Comfort & Style
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            {' '}
            Explore furniture that harmoniously combines comfort and style to
            elevate your home. Discover pieces that bring warmth, functionality,
            and timeless elegance into your living space
          </p>

          <Button className="px-8 border border-black py-4 rounded-2xl">
            Contact Now
          </Button>
        </div>

        <div className="flex-1 relative">
          <img
            src="/Hero-Ornament.png"
            className="w-full rounded-3xl shadow-2xl"
          />
          <Button className="" type="button" onClick={handleNavigate}>
            <img
              src="/Circular-CTA.png"
              className="w-56 absolute -left-8 -bottom-8"
            />
          </Button>
        </div>
      </div>

      {children}
    </section>
  );
}

export default Hero;
