import React, { useState } from 'react';
import axios from 'axios';
const AddLessonModal = ({ isOpen, onClose, onSubmit,courseId }) => {
  console.log(courseId)
  const [title, setTitle] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [order, setOrder] = useState('');

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };
  const token = localStorage.getItem("token");
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', pdfFile);
    formData.append('video_url', videoUrl);
    formData.append('course_id',courseId);
    formData.append('order',courseId);

    try {
      
      const response = await axios.post('http://localhost:3000/api/lesson/lessons', {
        'course_id':courseId,
        'title':title,
        'video_url':videoUrl,
        'order':order,
        'content':pdfFile
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}` 
        },
      });

      // Handle successful response
      console.log('Lesson added:', response.data);

      // Call onSubmit with the response data if needed
      onSubmit(response.data);

    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Close the modal after submission
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Lesson</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Lesson Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pdf">
              Upload PDF
            </label>
            <input
              id="pdf"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="video_url">
              Video URL
            </label>
            <input
              id="video_url"
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="order">
              Order
            </label>
            <input
              id="order"
              type="number"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Lesson
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLessonModal;
