'use client';

import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import ProductCard from '../common/ProductCard';

const BestSelling = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  const fetchRandomProducts = async () => {
    try {
      const response = await axios.get('/products');
      const allProducts = response.data;

      // Pick 5 random products
      const shuffled = allProducts.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 5);
      setRandomProducts(selected);
    } catch (error) {
      console.error('Error fetching best-selling products:', error);
    }
  };

  useEffect(() => {
    fetchRandomProducts();
  }, []);

  return (
    <section className="container-custom py-14">
      {/* Heading */}
      <div className="flex flex-col xl:gap-[25px]">
        <div className="mb-[2px] flex items-center space-x-2">
          <span className="inline-block h-4 w-1 rounded bg-red-600" />
          <p className="text-sm font-semibold text-red-600">This Month</p>
        </div>
        <h2 className="text-[32px] font-semibold leading-none tracking-wide text-gray-900">
          Best Selling Products
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-[100px] xl:py-[45px]">
        {randomProducts.map(product => (
          <ProductCard key={product._id || product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
