/* AdminSidebar.jsx */
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MdDashboard,
  MdPeople,
  MdShoppingCart,
  MdLayers,
  MdSettings,
} from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

const navItems = [
  { label: 'Dashboard', path: '/admin', Icon: MdDashboard },
  { label: 'User', path: '/admin/users', Icon: MdPeople },
  { label: 'Product', path: '/admin/products', Icon: MdShoppingCart },
  { label: 'Order', path: '/admin/orders', Icon: MdLayers },
  { label: 'Settings', path: '/admin/settings', Icon: MdSettings },
];

const Sidebar = () => {
  const pathname = usePathname(); // highlights the active page

  return (
    <aside className="fixed left-0 top-0 z-30 h-screen w-[210px] bg-white shadow-sm flex flex-col">
      {/* -------- nav items -------- */}
      <nav className="flex-1 pt-4">
        {navItems.map(({ label, path, Icon }) => {
          const active =
            pathname === path || (path === '/admin' && pathname === '/admin');
          return (
            <Link
              key={path}
              href={path}
              className={`group flex items-center gap-3 px-6 py-4 w-full
                text-[17px] font-medium
                ${
                  active
                    ? 'bg-yellow-300/60 text-gray-900'
                    : 'text-gray-700 hover:bg-yellow-300/40'
                }`}
            >
              <Icon className="text-[20px]" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* -------- logout  -------- */}
      <Link
        href="/admin/login"
        className="mb-6 flex items-center gap-2 px-6 text-[15px] font-medium text-blue-600 hover:text-blue-700"
      >
        <FiLogOut className="text-lg" />
        Log&nbsp;Out
      </Link>
    </aside>
  );
};

export default Sidebar;
