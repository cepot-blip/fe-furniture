import React, { useState } from 'react';

import AddressContainer from '../../components/Fragments/Address/AddressContainer';
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
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />

      <div className="w-full flex py-8">
        <AddressContainer />
      </div>
    </main>
  );
}

export default AddressPages;
