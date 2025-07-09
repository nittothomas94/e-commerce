import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="w-[150px] md:w-[200px] lg:w-[240px] xl:w-[280px] h-[350px] flex flex-col animate-pulse border rounded-lg p-4 shadow">
      <div className="w-full] h-40 bg-gray-300 rounded mb-4" />
      <div className="h-4 bg-gray-300 rounded mb-2 w-[80%]" />
      <div className="h-4 bg-gray-300 rounded mb-1 w-[60%]" />
      <div className="h-4 bg-gray-200 rounded w-[40%]" />
    </div>
  );
};

export default ProductCardSkeleton;
