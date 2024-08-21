import React, { useState } from 'react';
import { FiUpload, FiFileText } from 'react-icons/fi';

const AddBlogPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    tags: '',
    content: null,
    contentPreview: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          content: file,
          contentPreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Add New Blog</h2>

      {/* Blog Title */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Blog Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter blog title"
          required
        />
      </div>

      {/* Blog Tags */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Tags (comma separated)</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter tags"
        />
      </div>

      {/* Blog Content Upload */}
      <div className="mb-8 relative">
        <label className="block text-gray-700 font-semibold mb-2">Upload Blog Content (PDF)</label>
        <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg flex items-center justify-center relative">
          {formData.contentPreview ? (
            <div className="flex items-center space-x-4">
              <FiFileText className="text-4xl text-gray-500" />
              <p className="text-gray-700 font-semibold">{formData.content.name}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <FiUpload className="text-6xl text-gray-400" />
              <p className="text-gray-500 mt-2">Drag and drop a PDF file or click to upload</p>
            </div>
          )}
          <input
            type="file"
            name="content"
            accept="application/pdf"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-colors duration-200"
      >
        Add Blog
      </button>
    </form>
  );
};

export default AddBlogPage;
