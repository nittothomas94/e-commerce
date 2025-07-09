'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log({ ...formData, [name]: value }); // Logs every change
  };

  const handleLogin = () => {
    console.log('Logging in:', formData);
  };

  const handleForgotPassword = () => {
    alert('This feature has not been implemented.');
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-[1500px] xl:max-w-[1200px] mx-auto flex flex-col lg:flex-row">
        {/* Left Side Image */}
        <div className="hidden lg:flex w-1/2 justify-end">
          <Image
            src="/images/Side-Image.jpg"
            alt="Login Side"
            className="object-contain"
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center px-6 lg:px-12 py-12">
          <div className="w-full max-w-[400px]">
            <h2 className="text-2xl font-bold mb-2">Log in to Exclusive</h2>
            <p className="text-sm text-gray-600 mb-6">
              Enter your details below
            </p>

            <div className="flex flex-col gap-4">
              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email or Phone Number"
                value={formData.email}
                onChange={handleChange}
                className="border-b border-gray-300 py-2 outline-none text-sm placeholder:text-gray-500"
              />
              {/* Password Input */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border-b border-gray-300 py-2 outline-none text-sm placeholder:text-gray-500"
              />

              {/* Login Button with Animation */}
              <motion.button
                className="mt-2 bg-[#DB4444] text-white py-2 transition-all rounded-sm hover:scale-105 hover:shadow-md duration-300"
                whileHover={{ x: 10 }}
                onClick={handleLogin}
              >
                Log In
              </motion.button>

              {/* Sign up with Google */}
              <button className="border py-2 flex items-center justify-center gap-2 text-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                <FcGoogle />
                Log in with Google
              </button>
            </div>

            {/* Forgot Password Link */}
            <p
              className="text-sm text-gray-600 mt-6 text-center cursor-pointer hover:text-[#DB4444]"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </p>

            {/* Sign up Link */}
            <p className="text-sm text-gray-600 mt-6 text-center">
              Don't have an account?
              <Link href="/signup" className="text-black underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
