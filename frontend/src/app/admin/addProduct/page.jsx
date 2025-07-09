'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '../../utils/axios';

export default function AddProduct() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    oldPrice: '',
    actualPrice: '',
    description: '',
    category: '',
    quantityAvailable: '',
    stock: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!imageFile) {
      alert('Please select a product image');
      return;
    }

    try {
      setUploading(true);

      // Upload single image
      const imageForm = new FormData();
      imageForm.append('avatar', imageFile); // assuming backend expects 'avatar'

      const uploadRes = await axios.post('/upload-img', imageForm, {
        timeout: 15000,
      });

      const uploadedUrl = uploadRes.data.imageUrl;

      if (!uploadedUrl) {
        throw new Error('Image upload failed');
      }

      // Final payload
      const payload = {
        ...formData,
        actualPrice: Number(formData.actualPrice),
        oldPrice: Number(formData.oldPrice),
        quantityAvailable: Number(formData.quantityAvailable),
        image: uploadedUrl,
      };

      // Create product
      const res = await axios.post(
        'http://localhost:8000/api/products',
        payload,
        {
          timeout: 10000, // 👈 Optional: increase for product creation too
        }
      );

      if (res.status === 200 || res.status === 201) {
        alert('Product added successfully!');
        router.push('/admin/products');
      } else {
        alert('Failed to add product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="p-6 bg-[#fdf6e3] min-h-screen">
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-6 max-w-3xl"
      >
        {/* Product Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Product Title</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter product name"
          />
        </div>

        {/* Price Fields */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Old Price</label>
            <input
              name="oldPrice"
              type="number"
              value={formData.oldPrice}
              onChange={handleInputChange}
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Current Price</label>
            <input
              name="actualPrice"
              type="number"
              value={formData.actualPrice}
              onChange={handleInputChange}
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border px-4 py-2 rounded"
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select a category</option>
            <option value="Camera">Camera</option>
            <option value="Laptop">Laptop</option>
            <option value="Headphones">Headphones</option>
            <option value="Accessories">Accessories</option>
            <option value="Keyboards">Keyboards</option>
            <option value="Gaming">Gaming</option>
            <option value="Monitor">Monitor</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Quantity Available</label>
          <input
            name="quantityAvailable"
            type="number"
            value={formData.quantityAvailable}
            onChange={handleInputChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Stock */}
        <div className="mb-4 flex items-center space-x-3">
          <input
            type="checkbox"
            name="stock"
            checked={formData.stock}
            onChange={handleInputChange}
          />
          <label className="font-medium">In Stock</label>
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded px-4 py-2"
          />
          <p className="text-sm text-gray-500 mt-1">
            Only one image can be selected.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={uploading}
          className="mt-4 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          {uploading ? 'Uploading...' : 'Add Product'}
        </button>
      </form>
    </section>
  );
}
