'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const isLoginPage = pathname === '/admin/login';

  return (
    <>
      {!isLoginPage && <Sidebar />}
      {!isLoginPage && <Navbar />}

      <main
        className={`min-h-screen bg-[#FFFCF1] overflow-x-hidden pr-6 pb-6 ${
          !isLoginPage ? 'pl-[210px] pt-[60px]' : ''
        }`}
      >
        {children}
      </main>
    </>
  );
}
