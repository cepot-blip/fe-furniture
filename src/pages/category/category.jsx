import React, { useState } from 'react';

import Footer from '../../components/Fragments/Footer/Footer';
import Navbar from '../../components/Fragments/Navbar/Navbar';
import ItemProduct from '../../components/Fragments/Product/ItemProduct';
import Sidebar from '../../components/Fragments/Sidebar/Sidebar';

function Category() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <main className="flex flex-col mx-auto max-w-[1300px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />

      <div className="w-full flex flex-col">
        <ItemProduct />

        <Footer />
      </div>
    </main>
  );
}

export default Category;
