import React from 'react';
import Menu from '../components/menu/Menu';
import Header from '../components/header/Header';
import About from '../components/about/About';
import Gallery from '../components/gallery/Gallery';
import ItemsCard from '../components/itemsCard/ItemsCard';
import Location from '../components/location/Location';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Menu />
      <Header />
      <About />
      <Gallery />
      <ItemsCard />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;