'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const owners = [
  {
    id: 1,
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
    img: '/images/owner1.jpg',
  },
  {
    id: 2,
    name: 'Emma Watson',
    role: 'Managing Director',
    img: '/images/owner2.jpg',
  },
  {
    id: 3,
    name: 'Will Smith',
    role: 'Product Designer',
    img: '/images/owner3.jpg',
  },
  {
    id: 4,
    name: 'Scarlett Johansson',
    role: 'CTO',
    img: '/images/owner4.jpg',
  },
  {
    id: 5,
    name: 'Robert Downey Jr.',
    role: 'Chief Marketing Officer',
    img: '/images/owner5.jpg',
  },
  {
    id: 6,
    name: 'Chris Evans',
    role: 'Head of Sales',
    img: '/images/owner6.jpg',
  },
  {
    id: 7,
    name: 'Gal Gadot',
    role: 'HR Manager',
    img: '/images/owner7.jpg',
  },
  {
    id: 8,
    name: 'Dwayne Johnson',
    role: 'Operations Lead',
    img: '/images/owner8.jpg',
  },
  {
    id: 9,
    name: 'Jennifer Lawrence',
    role: 'Senior UX Researcher',
    img: '/images/owner9.jpg',
  },
];

const getCardsPerSlide = width => {
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
};

const CompanyOwners = () => {
  const [active, setActive] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide(1024));

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      setCardsPerSlide(getCardsPerSlide(width));
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const SLIDE_COUNT = Math.ceil(owners.length / cardsPerSlide);
  const start = active * cardsPerSlide;
  const current = owners.slice(start, start + cardsPerSlide);

  useEffect(() => {
    const t = setInterval(
      () => setActive(prev => (prev + 1) % SLIDE_COUNT),
      3000
    );
    return () => clearInterval(t);
  }, [SLIDE_COUNT]);

  return (
    <section className="w-full px-4 sm:px-6 py-[40px] xl:py-[50px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Animated Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className={`w-full grid gap-8 xl:gap-[40px] 2xl:gap-[180px] ${
              cardsPerSlide === 1
                ? 'grid-cols-1'
                : cardsPerSlide === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {current.map(owner => (
              <article
                key={owner.id}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="mb-5 w-[260px] sm:w-[280px] md:w-[300px] xl:w-[320px] 2xl:w-[400px] h-[280px] sm:h-[300px] md:h-[320px] xl:h-[360px] 2xl:h-[450px] bg-gray-100 overflow-hidden rounded-xl">
                  <Image
                    src={owner.img}
                    alt={owner.name}
                    width={320}
                    height={360}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg sm:text-xl md:text-[22px] font-semibold">
                  {owner.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{owner.role}</p>

                <div className="mt-4 flex space-x-6 text-lg">
                  <FaTwitter className="cursor-pointer transition-colors hover:text-red-600" />
                  <FaInstagram className="cursor-pointer transition-colors hover:text-red-600" />
                  <FaLinkedinIn className="cursor-pointer transition-colors hover:text-red-600" />
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="mt-10 flex justify-center space-x-2">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[8px] w-[8px] rounded-full transition-all ${
                i === active ? 'scale-125 bg-red-600' : 'bg-gray-400/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOwners;
