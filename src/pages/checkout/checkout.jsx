import React, { useState } from 'react';

import Navbar from '../../components/Fragments/Navbar/Navbar';
import Sidebar from '../../components/Fragments/Sidebar/Sidebar';

function Checkout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <main className="flex flex-col mx-auto max-w-[1500px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />

      <div className="py-5">
        <h1>Checkout page</h1>
      </div>
    </main>
  );
}

export default Checkout;
