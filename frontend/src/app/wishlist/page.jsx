import React from 'react';
import Wishlist from '../components/wishlist/Wishlist';
import JustForYou from '../components/wishlist/JustForYou';

const WishlistPage = () => {
  return (
    <div className="w-full min-h-screen">
      <Wishlist />
      <JustForYou />
    </div>
  );
};

export default WishlistPage;
