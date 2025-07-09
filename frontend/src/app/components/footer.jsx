'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaApple,
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoMdSend } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 flex justify-center py-[50px] xl:py-[100px] relative px-[5px]">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {/* Exclusive Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">Exclusive</h2>
          <p className="text-sm mb-2">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-400 rounded px-2 py-1">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent text-sm text-white placeholder-gray-400 outline-none flex-1"
            />
            <IoMdSend className="text-white cursor-pointer" size={18} />
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Support</h2>
          <p className="text-sm mb-2">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm mb-2">DH 1515, Bangladesh.</p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map(
              text => (
                <li key={text}>
                  <Link
                    href={`/${text.toLowerCase().replace(/ /g, '-')}`}
                    className="hover:text-white transition-colors"
                  >
                    {text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map(text => (
              <li key={text}>
                <Link
                  href={`/${text.toLowerCase().replace(/ /g, '-')}`}
                  className="hover:text-white transition-colors"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">
            Download App
          </h2>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/images/Qr-Code.svg"
              alt="QR Code"
              className="w-20 h-20 object-contain"
            />
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 px-2 py-1 border border-white rounded text-white text-sm">
                <FcGoogle size={16} />
                Google Play
              </button>
              <button className="flex items-center gap-2 px-2 py-1 border border-white rounded text-white text-sm">
                <FaApple size={16} />
                App Store
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="absolute bottom-2 text-xs text-gray-500 mt-12 text-center w-full">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
