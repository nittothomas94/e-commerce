'use client';

import React, { useState, useRef } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import {
  FiSmartphone,
  FiMonitor,
  FiWatch,
  FiCamera,
  FiHeadphones,
} from 'react-icons/fi';
import { IoGameControllerOutline } from 'react-icons/io5';

// category data ­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­
const categories = [
  { id: 'phones', label: 'Phones', icon: FiSmartphone },
  { id: 'computers', label: 'Computers', icon: FiMonitor },
  { id: 'smartwatch', label: 'SmartWatch', icon: FiWatch },
  { id: 'camera', label: 'Camera', icon: FiCamera },
  { id: 'headphones', label: 'HeadPhones', icon: FiHeadphones },
  { id: 'gaming', label: 'Gaming', icon: IoGameControllerOutline },
];

const Category = () => {
  const [active, setActive] = useState('');
  const scrollRef = useRef(null);

  const scroll = dir => {
    const CARD_W = 148; // 120px box + 28px gap
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === 'right' ? CARD_W * 3 : -CARD_W * 3,
      behavior: 'smooth',
    });
  };

  return (
    <section className="container-custom py-14 px-[5px]">
      {/* heading */}
      <div className="mb-10 flex items-center justify-between">
        <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px] xl:gap-[25px]">
          <div className="mb-[2px] flex items-center space-x-2">
            <span className="inline-block h-4 w-1 rounded bg-red-600" />
            <p className="text-sm font-semibold text-red-600">Categories</p>
          </div>
          <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[32px] 2xl:text-[40px] font-[700] leading-none tracking-wide text-gray-900">
            Browse By Category
          </h2>
        </div>

        {/* arrows */}
        <div className="hidden items-center space-x-3 xl:flex">
          <button
            onClick={() => scroll('left')}
            className="grid h-10 w-10 place-items-center rounded-full bg-gray-100"
          >
            <MdArrowBackIos className="text-lg" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="grid h-10 w-10 place-items-center rounded-full bg-gray-100"
          >
            <MdArrowForwardIos className="text-lg" />
          </button>
        </div>
      </div>

      {/* category boxes */}
      <div
        ref={scrollRef}
        className="flex justify-between overflow-x-auto scroll-smooth pb-2 gap-[10px] sm:gap-[15px] lg:gap-8"
      >
        {categories.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`flex w-28 xl:w-[200px] xl:h-[150px] shrink-0 flex-col items-center justify-center space-y-3 rounded border
              ${
                active === id
                  ? 'border-transparent bg-red-600 text-white'
                  : 'border-gray-300 bg-white text-gray-800'
              } py-7 transition`}
          >
            <Icon
              className={`h-6 w-6 ${
                active === id ? 'stroke-white' : 'stroke-gray-700'
              }`}
            />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Category;
