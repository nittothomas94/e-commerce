import React from 'react';
import Hero from './components/home/Hero';
import FlashSale from './components/home/FlashSale';
import BestSelling from './components/home/BestSelling';
import Category from './components/home/Category';
import OutProducts from './components/home/OutProducts';
import Benefits from './components/common/Benefits';
import NewArrival from './components/home/NewArrival';

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <FlashSale />
      <Category />
      <BestSelling />
      <OutProducts />
      <NewArrival />
      <Benefits />
    </div>
  );
};

export default Home;
