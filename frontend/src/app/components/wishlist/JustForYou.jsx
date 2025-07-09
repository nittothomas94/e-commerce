'use client';

import React from 'react';
import Link from 'next/link';
import ProductCard from '../common/ProductCard';

const products = [
  {
    id: 1,
    title: 'ASUS FHD Gaming Laptop',
    price: 960,
    oldPrice: 1160,
    discount: 35,
    img: '/images/justforyou/laptop.png',
  },
  {
    id: 2,
    title: 'IPS LCD Gaming Monitor',
    price: 1160,
    oldPrice: null,
    discount: 0,
    img: '/images/justforyou/monitor.png',
  },
  {
    id: 3,
    title: 'HAVIT HV‑G92 Gamepad',
    price: 560,
    oldPrice: null,
    discount: 0,
    img: '/images/justforyou/gamepad.png',
    label: 'NEW',
  },
  {
    id: 4,
    title: 'AK‑900 Wired Keyboard',
    price: 200,
    oldPrice: null,
    discount: 0,
    img: '/images/justforyou/keyboard.png',
  },
  {
    id: 5,
    title: 'RGB Gaming Mouse',
    price: 80,
    oldPrice: null,
    discount: 0,
    img: '/images/justforyou/mouse.png',
  },
];

const JustForYou = () => {
  return (
    <section className="w-full flex justify-center px-4 py-12">
      <div className="w-full max-w-[1200px] 2xl:max-w-[1500px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-6 bg-red-600 rounded"></span>
            <h2 className="text-lg xl:text-xl font-semibold">Just For You</h2>
          </div>
          <Link
            href="/products"
            className="border border-black rounded px-6 py-2 text-sm xl:text-base hover:bg-black hover:text-white transition-colors"
          >
            See All
          </Link>
        </div>

        {/* Product list */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JustForYou;
