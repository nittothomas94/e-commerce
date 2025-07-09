'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Sign Up', href: '/signup' },
];

const dummyProducts = [
  'iPhone 14',
  'Samsung Galaxy S23',
  'MacBook Air',
  'AirPods Pro',
  'Sony Headphones',
  'Nike Shoes',
  'Adidas Hoodie',
];

const Navbar = () => {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const isAuthPage = pathname === '/signup' || pathname === '/login';

  const handleSearch = e => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const results = dummyProducts.filter(product =>
      product.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white relative">
      <div className="container-custom px-[5px] h-[60px] xl:h-[100px] flex items-center justify-between">
        {/* Logo */}
        <div className="text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px] font-[700]">
          E-Commerce
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-5 xl:gap-10 text-sm font-medium">
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`xl:text-[18px] font-[500] group relative transition-all duration-300 ${
                  isActive ? 'text-black' : 'text-gray-700'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-0.5 h-[2px] bg-black transition-all duration-700 ease-in-out origin-center ${
                    isActive ? 'w-full left-0' : 'w-0 group-hover:w-full left-0'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right Side: Search + Icons */}
        {!isAuthPage && (
          <div className="hidden lg:flex items-center gap-4 relative">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="What are you looking for?"
                className="px-4 py-1.5 xl:py-3 lg:w-64 border border-gray-300 rounded-full text-sm focus:outline-none placeholder:text-gray-500"
              />
              {/* <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600" /> */}

              {/* Matched Products Dropdown */}
              {filteredProducts.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-md z-10">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {product}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Icons */}
            <Link href="/wishlist" className="flex items-center">
              <FiHeart className="text-xl text-gray-700" />
            </Link>
            <Link href="/cart" className="flex items-center">
              <FiShoppingCart className="text-xl text-gray-700" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
