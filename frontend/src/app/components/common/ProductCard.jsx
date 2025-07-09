'use client';

import React from 'react';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import axios from '../../utils/axios'; // Adjust if needed
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const onAddToCart = async id => {
    try {
      const response = await axios.get(`/products/${id}`);
      await axios.post('/cartProducts', response.data);
      toast.success('Product added to Cart');
    } catch (error) {
      toast.error('Failed to add to cart');
    }
  };

  const onAddToWishlist = async id => {
    try {
      const response = await axios.get(`/products/${id}`);
      const item = response.data;

      await axios.post('/wishlistProducts', {
        name: item.name,
        actualPrice: item.actualPrice,
        oldPrice: item.oldPrice || 0,
        image: item.image,
        productId: item._id,
      });

      toast.success('Added to Wishlist ❤️');
    } catch (error) {
      toast.error('Failed to add to Wishlist');
    }
  };

  return (
    <div className="relative w-[150px] md:w-[200px] lg:w-[240px] xl:w-[280px] shrink-0">
      {/* Action Icons */}
      <div className="absolute right-0 md:right-3 top-3 space-y-2 text-lg">
        <button
          onClick={() => onAddToWishlist(product._id)}
          className="grid h-5 w-5 md:h-8 md:w-8 place-items-center cursor-pointer rounded-full bg-white shadow hover:text-red-600 transition"
        >
          <AiOutlineHeart />
        </button>
        <button className="grid h-5 w-5 md:h-8 md:w-8 place-items-center rounded-full bg-white shadow">
          <AiOutlineEye />
        </button>
      </div>

      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="flex h-40 lg:h-[200px] xl:h-[220px] w-full items-center justify-center bg-gray-50">
          <img src={product.image} alt={product.name} className="max-h-full" />
        </div>
      </Link>

      {/* Add To Cart CTA */}
      <button
        onClick={() => onAddToCart(product._id)}
        className="hidden md:block mb-4 mt-2 w-full cursor-pointer rounded bg-black py-2 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Add To Cart
      </button>

      {/* Name + Price */}
      <Link href={`/products/${product.id}`} className="block space-y-[2px]">
        <p className="line-clamp-1 text-sm font-medium text-gray-800">
          {product.name}
        </p>
        <div className="flex items-center space-x-2 text-[15px]">
          <span className="font-semibold text-red-600">
            ₹{product.actualPrice}
          </span>
          {product.oldPrice > 0 && (
            <span className="text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>
      </Link>

      <ToastContainer />
    </div>
  );
};

export default ProductCard;
