import React, { useState } from 'react';

import Navbar from '../../components/Fragments/Navbar/Navbar';
import Sidebar from '../../components/Fragments/Sidebar/Sidebar';

function AddressPages() {
  const [isSidebarVisible, SetIsSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    SetIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <main className="flex flex-col mx-auto w-[1300px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar />

      <div className="">
        <h1>Address</h1>
      </div>
    </main>
  );
}

export default AddressPages;
