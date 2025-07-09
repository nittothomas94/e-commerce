/* AdminNavbar.jsx */
'use client';

import React from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { MdSettings } from 'react-icons/md';

const Navbar = () => {
  return (
    <header
      /* push right to make room for the sidebar */
      className="fixed left-[210px] top-0 z-20 h-[60px] w-[calc(100%-210px)]
                 bg-white shadow-sm flex items-center justify-end gap-6 pr-8"
    >
      {/* -------- search box -------- */}
      <div className="relative">
        <input
          type="text"
          placeholder=""
          className="h-9 w-[260px] rounded border border-blue-200 pl-4 pr-10 text-sm outline-none
                     focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
        />
        <FiSearch className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
      </div>

      {/* -------- settings square -------- */}
      <button className="flex h-9 w-9 items-center justify-center rounded bg-blue-600 text-white hover:bg-blue-700">
        <MdSettings className="text-lg" />
      </button>

      {/* -------- user avatar -------- */}
      <Image
        src="/images/avatar.jpg" /* change to your real avatar */
        alt="avatar"
        width={36}
        height={36}
        className="h-9 w-9 rounded-full object-cover"
      />
    </header>
  );
};

export default Navbar;
