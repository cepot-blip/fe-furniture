import React, { useState } from 'react';

import Navbar from '../../components/Fragments/Navbar/Navbar';
import PaymentContainer from '../../components/Fragments/Payment/PaymentContainer';
import Sidebar from '../../components/Fragments/Sidebar/Sidebar';

function Payment() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <main className="flex flex-col mx-auto max-w-[1300px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />

      <div className="w-full flex py-8 flex-col gap-10">
        <div className="w-full flex py-8">
          <PaymentContainer />
        </div>
      </div>
    </main>
  );
}

export default Payment;
