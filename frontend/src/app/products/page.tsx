import React from 'react';
import ProductsComponent from '../components/products/ProductsComponent';
import DiscoverText from '../components/products/DiscoverText';
const Products = () => {
  return (
    <div className="w-full min-h-screen px-[5px] sm:px-[6px]">
      <DiscoverText />
      <ProductsComponent />
    </div>
  );
};

export default Products;
