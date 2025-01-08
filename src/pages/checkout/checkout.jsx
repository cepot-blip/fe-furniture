import React, { useState } from 'react';

import CheckoutContainer from '../../components/Fragments/Checkout/CheckoutContainer';
import Navbar from '../../components/Fragments/Navbar/Navbar';
import Sidebar from '../../components/Fragments/Sidebar/Sidebar';

function Checkout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <main className="flex flex-col mx-auto max-w-[1300px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />

      <div className="w-full flex py-8">
        <CheckoutContainer />
      </div>
    </main>
  );
}

export default Checkout;
