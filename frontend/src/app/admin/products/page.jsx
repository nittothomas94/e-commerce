'use client';

import { useEffect, useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import axios from '../../utils/axios';

const PRODUCTS_PER_PAGE = 12;

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/products');
        setProducts(res.data || []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filtered = useMemo(() => {
    if (!search) return products;
    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  const goUp = () => setPage(prev => Math.max(1, prev - 1));
  const goDown = () => setPage(prev => Math.min(totalPages, prev + 1));

  return (
    <section className="relative p-6 bg-[#fdf6e3] min-h-screen">
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">
        Products Management
      </h1>

      {/* Search & Buttons */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Product Name"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="h-10 w-72 rounded border border-gray-300 pl-4 pr-10 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
          />
          <FiSearch className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
        </div>

        <button className="flex items-center gap-1 h-10 px-4 rounded bg-gray-800 text-white hover:bg-gray-700">
          Category
        </button>

        <Link
          href="http://localhost:3000/admin/addProduct"
          className="flex items-center h-10 px-4 rounded bg-blue-700 text-white hover:bg-blue-800"
        >
          Add Product
        </Link>
      </div>

      {/* Product Grid */}
      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {paginated.map(product => (
            <div
              key={product._id}
              className="rounded-lg bg-gray-200 p-4 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={product.image || '/placeholder.png'}
                alt={product.name}
                className="mx-auto mb-4 h-48 object-contain"
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="font-bold mb-2">₹{product.actualPrice}</p>
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>
          ))}

          {paginated.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-6">
              No products found.
            </div>
          )}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center gap-2 flex-wrap">
          <button
            onClick={goUp}
            disabled={page === 1}
            className="px-3 py-1 text-sm rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-40"
          >
            <IoIosArrowUp />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            const active = pageNum === page;
            return (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  active
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={goDown}
            disabled={page === totalPages}
            className="px-3 py-1 text-sm rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-40"
          >
            <IoIosArrowDown />
          </button>
        </div>
      )}
    </section>
  );
}
