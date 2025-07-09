'use client';

import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import WishlistCard from '../wishlist/WishlistCard';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlistItems = async () => {
    try {
      const response = await axios.get('/wishlistProducts');
      setWishlistItems(response.data);
    } catch (error) {
      console.error('Failed to fetch wishlist items:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async id => {
    try {
      await axios.delete(`/wishlistProducts/${id}`);
      setWishlistItems(prev => prev.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const moveToCart = async item => {
    try {
      await axios.post('/cartProducts', {
        name: item.name,
        actualPrice: item.actualPrice,
        oldPrice: item.oldPrice || 0,
        image: item.image,
        productId: item.productId,
        quantity: 1,
      });
      await removeFromWishlist(item._id);
    } catch (error) {
      console.error('Failed to move to cart:', error);
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  return (
    <section className="w-full flex justify-center px-4 py-12">
      <div className="w-full max-w-[1200px] 2xl:max-w-[1500px]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg xl:text-xl font-semibold">
            Wishlist ({wishlistItems.length})
          </h2>
        </div>

        {loading ? (
          <p>Loading wishlist...</p>
        ) : wishlistItems.length === 0 ? (
          <p className="text-center">Your wishlist is empty</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map(item => (
              <WishlistCard
                key={item._id}
                item={item}
                onRemove={() => removeFromWishlist(item._id)}
                onMoveToCart={() => moveToCart(item)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
