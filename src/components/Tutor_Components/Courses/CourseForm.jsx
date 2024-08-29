import React, { useState,useEffect } from 'react';
import { FiEdit } from 'react-icons/fi'; // Importing an edit icon
import axios from 'axios';

const CourseForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category_id: '',
    price: '',
    duration: '',
    level: 'beginner',
    thumbnail: null,
    thumbnailPreview: '',
  });
  const token = localStorage.getItem("token");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/category');
        console.log(response)
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          thumbnail: file,
          thumbnailPreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('category_id', formData.category_id);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('duration', formData.duration);
    formDataToSend.append('level', formData.level);
    if (formData.thumbnail) {
      formDataToSend.append('thumbnail', formData.thumbnail);
    }
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:3000/api/courses', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        },
      });
      console.log('Course created:', response.data);
      onSubmit(response.data);
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Add New Course</h2>

      {/* Thumbnail Upload */}
      <div className="flex justify-center mb-8 relative">
        <div className="relative group">
          {formData.thumbnailPreview ? (
            <img 
              src={formData.thumbnailPreview} 
              alt="Thumbnail Preview" 
              className="h-40 w-40 object-cover rounded-full border-4 border-blue-500"
            />
          ) : (
            <div className="h-40 w-40 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 border-4 border-gray-300">
              No Image
            </div>
          )}
          <label 
            htmlFor="thumbnail" 
            className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white cursor-pointer group-hover:bg-blue-600 transition-colors duration-200"
          >
            <FiEdit className="h-5 w-5" />
            <input 
              id="thumbnail" 
              type="file" 
              name="thumbnail" 
              accept="image/*" 
              onChange={handleThumbnailChange} 
              className="hidden "
            />
          </label>
        </div>
      </div>

      {/* Course Title */}
      <div className="mb-4">
        <label className="block text-gray-700">Course Title</label>
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter course title"
          required
        />
      </div>

      {/* Course Description */}
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter course description"
          rows="4"
          required
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select 
          name="category_id" 
          value={formData.category_id} 
          onChange={handleChange} 
          className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
        <option value="">Select a category</option>
           {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block text-gray-700">Price (Npr)</label>
        <input 
          type="number" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
          className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter course price"
          min="0"
        />
      </div>

      {/* Duration */}
      <div className="mb-4">
        <label className="block text-gray-700">Duration (e.g., 10 hours)</label>
        <input 
          type="text" 
          name="duration" 
          value={formData.duration} 
          onChange={handleChange} 
          className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter course duration"
          required
        />
      </div>

      {/* Level */}
      <div className="mb-6">
        <label className="block text-gray-700">Level</label>
        <select 
          name="level" 
          value={formData.level} 
          onChange={handleChange} 
          className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-colors duration-200"
      >
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
