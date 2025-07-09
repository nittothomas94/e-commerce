'use client';

import React from 'react';
import { FiSearch } from 'react-icons/fi';

const TopBar = () => {
  return (
    <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      {/* Search Box */}
      <div className="relative w-full md:w-[400px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full xl:w-[600px] border rounded-full py-2 px-4 pl-10 text-sm outline-none"
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
      </div>

      {/* Buttons */}
      <div className="w-full flex justify-between md:justify-end md:gap-3">
        <button className="px-4 py-2 border rounded-full text-sm">
          Filter
        </button>
        <button className="px-4 py-2 border rounded-full text-sm">
          Category
        </button>
      </div>
    </div>
  );
};

export default TopBar;
