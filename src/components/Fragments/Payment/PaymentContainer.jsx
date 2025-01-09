import React from 'react';

import Footer from '../Footer/Footer';

import PaymentCartItem from './PaymentCartItem';
import PaymentInfo from './PaymentInfo';

function PaymentContainer() {
  return (
    <section className="flex flex-col mx-auto max-w-[1300px] z-5">
      <div className="flex gap-10">
        {/* left */}
        <div className="flex-1 w-full">
          <PaymentCartItem />
        </div>

        {/* right */}
        <div className="flex-1 w-full ">
          <PaymentInfo />
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default PaymentContainer;
