'use client';

import React from 'react';
import { FaStore } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { FiShoppingBag } from 'react-icons/fi';
import { GiMoneyStack } from 'react-icons/gi';

const stats = [
  {
    id: 1,
    number: '10.5k',
    label: 'Sellers active our site',
    Icon: FaStore,
  },
  {
    id: 2,
    number: '33k',
    label: 'Monthly Product Sale',
    Icon: HiOutlineCurrencyDollar,
  },
  {
    id: 3,
    number: '45.5k',
    label: 'Customer active in our site',
    Icon: FiShoppingBag,
  },
  {
    id: 4,
    number: '25k',
    label: 'Annual gross sale in our site',
    Icon: GiMoneyStack,
  },
];

const StatusNumbers = () => {
  return (
    <section className="container-custom flex flex-wrap justify-between xl:py-[80px]">
      {stats.map(({ id, number, label, Icon }) => (
        <article
          key={id}
          className="
            group
            relative
            w-[220px] h-[190px] xl:w-[240px] xl:h-[200px]
            border border-gray-200 rounded-md
            flex flex-col items-center justify-center
            transition-colors duration-200
            hover:bg-red-500 hover:text-white
          "
        >
          {/* icon */}
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-neutral-800 text-white mb-3">
            <Icon className="text-xl" />
          </div>

          {/* number */}
          <p className="text-2xl font-extrabold xl:text-2xl">{number}</p>

          {/* label */}
          <p className="text-center text-xs xl:text-sm leading-snug px-4">
            {label}
          </p>
        </article>
      ))}
    </section>
  );
};

export default StatusNumbers;
