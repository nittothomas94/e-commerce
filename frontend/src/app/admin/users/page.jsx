'use client';

import { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

// ---------------------------------------------------------------------------
// 1. Dummy users (30 rows)
// ---------------------------------------------------------------------------
const users = Array.from({ length: 30 }).map((_, i) => {
  const id = 1001 + i;
  return {
    id,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `9${String(876543210 + i).slice(0, 9)}`,
    address: `${i + 1} Example Road, City ${i + 1}`,
  };
});

// ---------------------------------------------------------------------------
// 2. Page component
// ---------------------------------------------------------------------------
const USERS_PER_PAGE = 10;

export default function UsersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  // computed pages
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  // filter + slice for current page
  const filtered = useMemo(() => {
    if (!search) return users;
    return users.filter(u => String(u.id).includes(search));
  }, [search]);

  const paginated = filtered.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );

  // jump helpers
  const goUp = () => setPage(prev => Math.max(1, prev - 1));
  const goDown = () => setPage(prev => Math.min(totalPages, prev + 1));

  return (
    <section className="relative p-6">
      {/* Heading */}
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">
        User Management
      </h1>

      {/* Search + (dummy) export button */}
      <div className="mb-6 flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search By User Id"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setPage(1); // reset to first page on new search
            }}
            className="h-10 w-72 rounded border border-gray-300 pl-4 pr-10 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
          />
          <FiSearch className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
        </div>

        {/* Fake export‑download button */}
        <button className="h-10 w-10 rounded bg-blue-700 text-lg font-bold text-white hover:bg-blue-800">
          ↓
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg bg-gray-100 text-sm">
          <thead className="bg-gray-300/70 text-left font-medium">
            <tr>
              <th className="px-4 py-3">User ID</th>
              <th className="px-4 py-3">Full name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone number</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3 text-center">Order details</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map(u => (
              <tr
                key={u.id}
                className="border-b border-gray-300/60 even:bg-gray-50/40"
              >
                <td className="px-4 py-3">{u.id}</td>
                <td className="px-4 py-3">{u.name}</td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3">{u.phone}</td>
                <td className="px-4 py-3">{u.address}</td>
                <td className="px-4 py-3 text-center text-blue-600 hover:underline cursor-pointer">
                  View order
                </td>
              </tr>
            ))}

            {paginated.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Vertical pagination rail (absolute right)                          */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute right-4 top-1/4 flex flex-col items-center gap-1">
        {/* Up arrow */}
        <button
          onClick={goUp}
          className="flex h-6 w-6 items-center justify-center rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
        >
          <IoIosArrowUp />
        </button>

        {/* Page buttons */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNum = i + 1;
          const active = pageNum === page;
          return (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs
                ${
                  active
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Down arrow */}
        <button
          onClick={goDown}
          className="flex h-6 w-6 items-center justify-center rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
        >
          <IoIosArrowDown />
        </button>
      </div>
    </section>
  );
}
