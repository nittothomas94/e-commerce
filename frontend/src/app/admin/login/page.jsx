'use client';

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#fff9e6] to-[#fff4cc] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/logo.svg" // Replace with your logo path
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow p-8 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Welcome
          </h1>
          <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
            Please log in to continue
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 transition text-white py-3 rounded font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
