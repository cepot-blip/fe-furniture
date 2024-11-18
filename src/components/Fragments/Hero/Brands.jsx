/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Brands() {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap">
        <img
          src="/IKEA-Logo.wine.png"
          className="inline-block w-96 h-80 mx-2"
        />
        <img
          src="/IKEA-Logo.wine.png"
          className="inline-block w-96 h-80 mx-2"
        />
        <img
          src="/IKEA-Logo.wine.png"
          className="inline-block w-96 h-80 mx-2"
        />
        <img
          src="/IKEA-Logo.wine.png"
          className="inline-block w-96 h-80 mx-2"
        />
      </div>

      <div className="absolute py-12 animate-marquee2 whitespace-nowrap">
        <img
          src="/IKEA-Logo.wine.png"
          className="inline-block w-96 h-80 mx-2"
        />
        <img
          src="/IKEA-Logo.wine.png"
          className="inline-block w-96 h-80 mx-2"
        />
        <img
          src="/IKEA-Logo.wine.png"
          className="inline-block w-96 h-80 mx-2"
        />
        <img
          src="/IKEA-Logo.wine.png"
          className="inline-block w-96 h-80 mx-2"
        />
      </div>
    </div>
  );
}

export default Brands;
