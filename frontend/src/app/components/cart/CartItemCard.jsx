'use client';

import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const CartItemCard = ({ product, onRemove }) => {
  return (
    <div className="bg-[#f9f9f9] border p-4 rounded-md relative group transition hover:shadow-md">
      {/* Remove Button */}
      <button
        className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
        onClick={onRemove}
      >
        <FiTrash2 />
      </button>

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-[180px] w-full object-contain mb-4"
      />

      {/* Name */}
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>

      {/* Quantity */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm">Qty:</span>
        <select className="border rounded px-2 py-1 text-sm">
          {[1, 2, 3, 4, 5].map(qty => (
            <option key={qty} value={qty} selected={qty === product.quantity}>
              {qty}
            </option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 text-sm font-semibold">
        <span className="text-red-600 text-[16px]">₹{product.actualPrice}</span>

        {typeof product.oldPrice === 'number' && product.oldPrice > 0 && (
          <span className="line-through text-gray-500">
            ₹{product.oldPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Add to Wishlist or Save for Later */}
      <div className="mt-4">
        <button className="text-sm underline text-blue-600 hover:text-blue-800">
          Save for later
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
