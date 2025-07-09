'use client';

import React, { useRef, useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import ProductCard from '../common/ProductCard';
import axios from '../../utils/axios';
import ProductCardSkeleton from '../common/ProductCardSkeleton';

// Countdown renderer
const CountdownRenderer = ({ days, hours, minutes, seconds }) => {
  const segment = (val, label) => (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">
        {label}
      </p>
      <p className="text-[28px] font-semibold leading-none tracking-wider">
        {String(val).padStart(2, '0')}
      </p>
    </div>
  );

  return (
    <div className="flex items-end space-x-3">
      {segment(days, 'Days')}
      <span className="text-[28px] font-semibold text-red-600">:</span>
      {segment(hours, 'Hours')}
      <span className="text-[28px] font-semibold text-red-600">:</span>
      {segment(minutes, 'Minutes')}
      <span className="text-[28px] font-semibold text-red-600">:</span>
      {segment(seconds, 'Seconds')}
    </div>
  );
};

const FlashSale = () => {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);

  // Scroll carousel
  const scroll = direction => {
    const CARD_WIDTH = 244; // 220px card + 24px gap
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'right' ? CARD_WIDTH * 3 : -CARD_WIDTH * 3,
      behavior: 'smooth',
    });
  };

  // Fetch 15 random products
  useEffect(() => {
    getFlashSaleProducts();
  }, []);

  const getFlashSaleProducts = async () => {
    try {
      const response = await axios.get('/products');
      const allProducts = response.data;

      // Shuffle and pick 15 random products
      const shuffled = allProducts.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 15);
      setProducts(selected);
    } catch (err) {
      console.error('Error fetching flash sale products:', err);
    }
  };

  // Flash sale end time
  const endDate =
    Date.now() +
    3 * 24 * 3600 * 1000 +
    23 * 3600 * 1000 +
    19 * 60 * 1000 +
    56 * 1000;

  return (
    <section className="container-custom py-[20px] xl:py-[120px] px-[5px] sm:px-[7px]">
      {/* heading row */}
      <div className="flex flex-col md:justify-between gap-[25px] py-[10px]">
        {/* title */}
        <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px] xl:gap-[25px]">
          <div className="mb-[2px] flex items-center space-x-2">
            <span className="inline-block h-4 w-1 rounded bg-red-600" />
            <p className="text-sm font-semibold text-red-600">Today’s</p>
          </div>
          <h2 className="xl:text-[34px] font-[600] leading-none tracking-wide text-gray-900">
            Flash Sales
          </h2>
        </div>

        {/* timer + arrows */}
        <div className="flex items-center xl:gap-[25px]">
          <Countdown date={endDate} renderer={CountdownRenderer} />
          <div className="hidden items-center space-x-3 xl:flex">
            <button
              onClick={() => scroll('left')}
              className="grid h-10 w-10 place-items-center rounded-full border"
            >
              <MdArrowBackIos className="text-lg" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="grid h-10 w-10 place-items-center rounded-full border"
            >
              <MdArrowForwardIos className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div
        ref={scrollRef}
        className="my-[30px] xl:my-[60px] flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
      >
        {products.length === 0
          ? Array.from({ length: 15 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products.map(prod => <ProductCard key={prod._id} product={prod} />)}
      </div>

      {/* view all */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => router.push('/products')}
          className="rounded bg-red-600 px-[30px] py-[5px] md:px-10 md:py-3 cursor-pointer text-lg font-medium text-white transition hover:bg-red-700"
        >
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSale;
