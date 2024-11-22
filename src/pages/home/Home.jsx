/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
import { useState } from 'react';

import About from '../../components/Fragments/About/About';
import Brands from '../../components/Fragments/Hero/Brands';
import Hero from '../../components/Fragments/Hero/Hero';
import Navbar from '../../components/Fragments/Navbar/Navbar';
import Category from '../../components/Fragments/Product/Category';
import ItemProduct from '../../components/Fragments/Product/ItemProduct';
import Sidebar from '../../components/Fragments/Sidebar/Sidebar';

function HomePage() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <main className="flex flex-col mx-auto max-w-[1500px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />
      <Hero>
        <Brands />
      </Hero>

      <Category />
      <About />
      <ItemProduct />
    </main>
  );
}

export default HomePage;
