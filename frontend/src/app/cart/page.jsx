'use client';

import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import CartTopBar from '../components/cart/CartTopBar';
import CartItemCard from '../components/cart/CartItemCard';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('/cartProducts');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  console.log('Cart Items:', cartItems);
  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleRemoveItem = async id => {
    try {
      await axios.delete(`/cartProducts/${id}`);
      setCartItems(prev => prev.filter(item => item._id !== id));
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  return (
    <div className="w-full min-h-screen px-[5px]">
      <div className="container-custom flex flex-col xl:gap-[20px] xl:py-[20px]">
        <CartTopBar />

        {/* Cart Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 2xl:gap-[50px] mt-5">
          {loading ? (
            <p>Loading cart items...</p>
          ) : cartItems.length === 0 ? (
            <p className="text-center col-span-full">Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <CartItemCard
                key={item._id || item.id}
                product={item}
                onRemove={() => handleRemoveItem(item._id || item.id)}
              />
            ))
          )}
        </div>

        {/* Move All to Checkout */}
        <div className="flex justify-end mt-8 mb-10">
          <button className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
            Move All To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
