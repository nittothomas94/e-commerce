'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Submitted Data:', formData);
    // You can also clear the form here if needed
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit bg-white md:p-[15px] my-[45px] rounded md:shadow-sm"
    >
      <div className="flex flex-col xl:flex-row gap-4">
        {/* Name */}
        <div className="flex flex-col w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-100 text-sm xl:text-base p-3 xl:p-4 w-full rounded outline-none"
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-100 text-sm xl:text-base p-3 xl:p-4 w-full rounded outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col w-full">
          <input
            type="text"
            name="phone"
            placeholder="Your Phone *"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-100 text-sm xl:text-base p-3 xl:p-4 w-full rounded outline-none"
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-4">
        <textarea
          name="message"
          placeholder="Your Massage"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-gray-100 text-sm xl:text-base p-3 xl:p-4 rounded outline-none resize-none md:h-[250px] xl:h-[320px] 2xl:h-[350px]"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white text-sm xl:text-base font-medium px-6 py-2 rounded"
        >
          Send Massage
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
