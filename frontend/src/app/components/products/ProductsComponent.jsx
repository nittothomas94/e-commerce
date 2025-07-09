'use client';

import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import ProductCard from '../common/ProductCard';
import ProductCardSkeleton from '../common/ProductCardSkeleton';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import axios from '../../utils/axios';

const ITEMS_PER_PAGE = 24;

const ProductsComponent = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination calculations
  const maxPage = Math.ceil(products.length / ITEMS_PER_PAGE);
  const currentProducts = products.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= maxPage) setPage(newPage);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  console.log('Products:', products);

  return (
    <section className="container-custom py-[10px]">
      {/* Top Bar */}
      <TopBar />

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[5px] sm:gap-[10px] xl:gap-[35px] 2xl:gap-[50px] xl:mt-[80px]">
        {loading
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : currentProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>

      {/* Pagination */}
      {!loading && (
        <div className="flex justify-center items-center md:gap-2 space-x-2 mt-[10px] py-[50px] xl:py-[70px] 2xl:py-[100px]">
          <button
            className="p-2 xl:p-3 border rounded-full disabled:opacity-30 cursor-pointer"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <MdArrowBackIos />
          </button>

          {Array.from({ length: maxPage }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`w-9 h-9 xl:w-11 xl:h-11 rounded-full border cursor-pointer ${
                i + 1 === page ? 'bg-red-600 text-white' : 'text-black'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="p-2 xl:p-3 border rounded-full disabled:opacity-30 cursor-pointer"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === maxPage}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductsComponent;
