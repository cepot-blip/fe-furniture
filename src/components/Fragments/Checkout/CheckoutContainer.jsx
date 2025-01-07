/* eslint-disable import/no-named-as-default-member */
import React from 'react';

import CheckoutUserInformation from './CheckoutUserInformation';

function CheckoutContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

function CheckoutContainer() {
  return (
    <section className="w-full max-w-[1300px] z-30">
      <div className="flex border border-gray-200 rounded-lg overflow-hidden p-4">
        <CheckoutContent className="w-full flex">
          <div className="w-1/2 flex-1 pr-4">
            <h1 className="text-xl font-semibold text-gray-800">
              Checkout our Products
            </h1>
            <p>Pastikan data anda sudah benar</p>
            <div className="pt-8">
              <CheckoutUserInformation />
            </div>
          </div>

          <div className="w-1/2 flex-1 pl-4">
            {/* <CheckoutUserInformation /> */}
          </div>
        </CheckoutContent>
      </div>
    </section>
  );
}

export default CheckoutContainer;
