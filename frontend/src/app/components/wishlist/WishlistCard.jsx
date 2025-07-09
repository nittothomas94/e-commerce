'use client';

import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { BsCartPlus } from 'react-icons/bs';

const WishlistCard = ({ item, onRemove, onMoveToCart }) => {
  return (
    <div className="bg-white border p-4 rounded-lg shadow-sm relative group transition hover:shadow-md">
      {/* Remove Button */}
      <button
        onClick={onRemove}
        className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
        title="Remove from Wishlist"
      >
        <FiTrash2 size={18} />
      </button>

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[180px] object-contain mb-4"
      />

      {/* Product Info */}
      <h2 className="text-base font-medium mb-1 line-clamp-1">{item.name}</h2>

      <div className="flex items-center gap-3 text-sm font-semibold">
        <span className="text-red-600 text-[16px]">
          ₹{item.actualPrice?.toLocaleString()}
        </span>
        {item.oldPrice > 0 && (
          <span className="line-through text-gray-500">
            ₹{item.oldPrice?.toLocaleString()}
          </span>
        )}
      </div>

      {/* Move to Cart */}
      <button
        onClick={onMoveToCart}
        className="w-full mt-4 py-2 border border-black text-sm rounded hover:bg-black hover:text-white flex items-center justify-center gap-2 transition"
      >
        <BsCartPlus size={18} />
        Move to Cart
      </button>
    </div>
  );
};

export default WishlistCard;
