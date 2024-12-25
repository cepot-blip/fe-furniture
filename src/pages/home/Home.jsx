/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
import { useEffect, useState } from 'react';

import About from '../../components/Fragments/About/About';
import Category from '../../components/Fragments/Category/Category';
import Footer from '../../components/Fragments/Footer/Footer';
import Gallery from '../../components/Fragments/Gallery/Gallery';
import Brands from '../../components/Fragments/Hero/Brands';
import Hero from '../../components/Fragments/Hero/Hero';
import Mitra from '../../components/Fragments/Mitra/Mitra';
import Navbar from '../../components/Fragments/Navbar/Navbar';
import ItemProduct from '../../components/Fragments/Product/ItemProduct';
import Review from '../../components/Fragments/Review/Review';
import Sidebar from '../../components/Fragments/Sidebar/Sidebar';

function HomePage() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <main className="flex flex-col mx-auto max-w-[1300px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />
      <Hero>
        <Brands />
      </Hero>

      <Category />
      <About />
      <ItemProduct />
      <Gallery />
      <Mitra />
      {/* <Review /> */}
      <Footer />
    </main>
  );
}

export default HomePage;
