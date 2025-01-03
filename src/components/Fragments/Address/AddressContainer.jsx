import React from 'react';

import Footer from '../Footer/Footer';

import AddressCartItem from './AddressCartItem';
import AddressForm from './AddressForm';

function AddressContainer() {
  return (
    <section className="flex flex-col mx-auto max-w-[1300px] z-30">
      <div className="flex gap-10">
        {/* left */}
        <div className="w-1/2">
          <div className="border-b-2 pb-5 flex justify-start">
            <h1 className="font-medium text-gray-500">
              Confirm Address for Shipping
            </h1>
          </div>
          <AddressForm />
        </div>

        {/* right */}
        <div className="w-1/2">
          <div className="border-b-2 pb-5 flex justify-end items-end">
            <h1 className="font-medium text-gray-500 ">Your product items</h1>
          </div>
          <AddressCartItem />
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default AddressContainer;
