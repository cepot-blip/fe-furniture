/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
import About from '../../components/Fragments/About/About';
import Brands from '../../components/Fragments/Hero/Brands';
import Hero from '../../components/Fragments/Hero/Hero';
import Navbar from '../../components/Fragments/Navbar/Navbar';
import Category from '../../components/Fragments/ProductCategory/Category';

function HomePage() {
  return (
    <main className="flex flex-col mx-auto max-w-[1500px]">
      <Navbar />
      <Hero>
        <Brands />
      </Hero>

      <Category />
      <About />
    </main>
  );
}

export default HomePage;
