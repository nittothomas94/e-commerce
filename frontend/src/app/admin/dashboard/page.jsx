'use client';

import {
  MdPeopleAlt,
  MdShoppingCart,
  MdLayers,
  MdAttachMoney,
} from 'react-icons/md';

const stats = [
  {
    label: 'Total Users',
    value: 1287,
    Icon: MdPeopleAlt,
  },
  {
    label: 'Products',
    value: 542,
    Icon: MdLayers,
  },
  {
    label: 'Orders',
    value: 957,
    Icon: MdShoppingCart,
  },
  {
    label: 'Revenue',
    value: '$42.6k',
    Icon: MdAttachMoney,
  },
];

export default function DashboardPage() {
  return (
    <section className="p-6">
      {/* Page heading */}
      <h1 className="mb-8 text-2xl font-semibold text-gray-800">
        Admin Dashboard
      </h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, Icon }) => (
          <article
            key={label}
            className="flex items-center gap-4 rounded-lg bg-white p-6 shadow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Icon className="text-xl" />
            </div>

            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-xl font-bold">{value}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
