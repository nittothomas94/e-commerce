'use client';

import React, { useEffect, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import ProductCard from '../common/ProductCard';
import axios from '../../utils/axios';

const ITEMS_PER_PAGE = 8;

const shuffleArray = arr => {
  return arr
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const OutProducts = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);

  const maxPage = Math.ceil(products.length / ITEMS_PER_PAGE) - 1;
  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const visible = products.slice(start, end);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/products');
      const shuffled = shuffleArray(response.data);
      setProducts(shuffled);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const nextPage = () => setPage(p => Math.min(p + 1, maxPage));
  const prevPage = () => setPage(p => Math.max(p - 1, 0));

  return (
    <section className="container-custom py-14">
      {/* heading + arrows */}
      <div className="mb-10 flex items-center justify-between">
        <div className="flex flex-col xl:gap-[20px]">
          <div className="mb-[2px] flex items-center space-x-2">
            <span className="inline-block h-4 w-1 rounded bg-red-600" />
            <p className="text-sm font-semibold text-red-600">Our Products</p>
          </div>
          <h2 className="text-[32px] font-semibold leading-none tracking-wide text-gray-900">
            Explore Our Products
          </h2>
        </div>

        {/* arrows */}
        <div className="hidden items-center space-x-3 xl:flex">
          <button
            onClick={prevPage}
            disabled={page === 0}
            className="grid h-10 w-10 place-items-center rounded-full border disabled:opacity-40"
          >
            <MdArrowBackIos className="text-lg" />
          </button>
          <button
            onClick={nextPage}
            disabled={page === maxPage}
            className="grid h-10 w-10 place-items-center rounded-full border disabled:opacity-40"
          >
            <MdArrowForwardIos className="text-lg" />
          </button>
        </div>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-5 xl:py-[40px]">
        {visible.map(prod => (
          <ProductCard key={prod._id || prod.id} product={prod} />
        ))}
      </div>

      {/* view all */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => router.push('/products')}
          className="rounded bg-red-600 px-10 py-3 text-lg font-medium text-white transition hover:bg-red-700"
        >
          View All Products
        </button>
      </div>
    </section>
  );
};

export default OutProducts;
