// components/PageNotFound.tsx
'use client';

import Link from 'next/link';
import React from 'react';

const PageNotFound: React.FC = () => {
  return (
    <section className="flex min-h-[60vh] w-full flex-col items-center justify-center px-4 text-center">
      {/* Decorative corner outline (optional – matches the Figma mock‑up) */}
      <span className="absolute left-[12%] top-[18%] h-[320px] w-[320px] border-l-2 border-t-2 border-blue-500 xl:left-[18%]" />

      {/* 404 heading */}
      <h1 className="text-[56px] font-semibold leading-none md:text-[72px] xl:text-[94px]">
        404&nbsp;Not&nbsp;Found
      </h1>

      {/* Helper text */}
      <p className="mt-6 text-sm text-gray-700 md:text-base">
        Your visited page not found.&nbsp;You may go home page.
      </p>

      {/* Back‑home button */}
      <Link
        href="/"
        className="
          mt-10 inline-block rounded
          bg-red-600 px-10 py-3
          text-sm font-medium text-white
          transition-colors hover:bg-red-700
        "
      >
        Back to home page
      </Link>
    </section>
  );
};

export default PageNotFound;
