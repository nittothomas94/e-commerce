'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaApple } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import { HiArrowLongRight } from 'react-icons/hi2';

// ----------------------------------------------------------------------------
// Image slider and categories
const sliderImages = [
  '/images/offterbanner2.jpg',
  '/images/offerbanner1new.jpg',
  '/images/offterbanner3.jpg',
  '/images/offterbanner4.jpg',
];

const categories = [
  `Woman's Fashion`,
  `Men's Fashion`,
  'Electronics',
  'Home & Lifestyle',
  'Medicine',
  'Sports & Outdoor',
  "Baby's & Toys",
  'Groceries & Pets',
  'Health & Beauty',
];

const subCategoryData = {
  "Woman's Fashion": ['Dresses', 'Shoes', 'Accessories'],
  "Men's Fashion": ['T-Shirts', 'Shoes', 'Watches'],
  Electronics: ['Mobiles', 'Laptops', 'Cameras'],
  'Home & Lifestyle': ['Furniture', 'Lighting', 'Kitchen'],
  Medicine: ['Supplements', 'First Aid', 'Wellness'],
  'Sports & Outdoor': ['Fitness', 'Cycling', 'Trekking'],
  "Baby's & Toys": ['Toys', 'Baby Care', 'Games'],
  'Groceries & Pets': ['Pet Food', 'Snacks', 'Daily Needs'],
  'Health & Beauty': ['Skincare', 'Haircare', 'Cosmetics'],
};
// ----------------------------------------------------------------------------

const Hero = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredTop, setHoveredTop] = useState(0);
  const listRefs = useRef([]);

  const handleMouseEnter = (item, index) => {
    const itemRef = listRefs.current[index];
    if (itemRef) {
      const rect = itemRef.getBoundingClientRect();
      setHoveredTop(
        rect.top - itemRef.offsetParent.getBoundingClientRect().top
      );
      setHoveredCategory(item);
    }
  };
  const [active, setActive] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white my-[10px] md:my-[15px] xl:mt-[30px]">
      <div className="container-custom flex lg:justify-between lg:gap-[30px] xl:gap-[40px] 2xl:gap-[50px]">
        {/* --------------------------------- */}
        {/* LEFT: Category List (Sidebar)    */}
        {/* --------------------------------- */}
        <aside
          className="relative hidden min-w-[200px] xl:w-[250px] border-r border-gray-400 py-4 lg:block"
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <ul className="space-y-4">
            {categories.map((item, index) => (
              <li
                key={index}
                ref={el => (listRefs.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(item, index)}
                className="group flex items-start justify-between pr-[20px] text-[17px] 2xl:text-[19px] font-medium text-gray-800 transition-colors hover:text-red-600 cursor-pointer relative"
              >
                {item}
                <MdArrowForwardIos className="h-4 w-4 mt-1 opacity-60 transition-transform" />
              </li>
            ))}
          </ul>

          {/* Floating Sub-category Box */}
          {hoveredCategory && (
            <div
              className="absolute left-full z-50 w-[280px] bg-white border border-gray-300 shadow-md p-4 animate-fade-down"
              style={{ top: hoveredTop }}
            >
              <h4 className="mb-3 text-lg font-semibold text-gray-900">
                {hoveredCategory}
              </h4>
              <ul className="space-y-2">
                {subCategoryData[hoveredCategory]?.map((sub, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-700 hover:text-red-600 cursor-pointer"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* --------------------------------- */}
        {/* RIGHT: Image Carousel / Banner   */}
        {/* --------------------------------- */}
        <div className="relative flex-1">
          <motion.img
            key={active}
            src={sliderImages[active]}
            alt="Hero Slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full object-cover h-[150px] md:h-[250px] lg:h-[380px] xl:h-[404px] 2xl:h-[450px] "
          />

          {/* Navigation Dots */}
          <div className="absolute bottom-[10px] xl:bottom-5 left-1/2 flex -translate-x-1/2 space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`size-[8px] md:h-[10px] md:w-[10px] rounded-full transition-all ${
                  active === index ? 'bg-red-600 scale-110' : 'bg-gray-400/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
