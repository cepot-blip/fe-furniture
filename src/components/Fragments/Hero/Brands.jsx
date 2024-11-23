/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Brands() {
  return (
    <div className="relative flex overflow-hidden w-full h-80">
      <div className="flex py-12 animate-marquee whitespace-nowrap">
        <div className="flex gap-12">
          <img src="/IKEA-Logo.wine.png" className="inline-block w-96 h-80" />
          <img src="/IKEA-Logo.wine.png" className="inline-block w-96 h-80" />
          <img src="/IKEA-Logo.wine.png" className="inline-block w-96 h-80" />
          <img src="/IKEA-Logo.wine.png" className="inline-block w-96 h-80" />
        </div>

        <div className="flex gap-12">
          <img src="/homedoki.png" className="inline-block w-96 h-80" />
          <img src="/homedoki.png" className="inline-block w-96 h-80" />
          <img src="/homedoki.png" className="inline-block w-96 h-80" />
          <img src="/homedoki.png" className="inline-block w-96 h-80" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
