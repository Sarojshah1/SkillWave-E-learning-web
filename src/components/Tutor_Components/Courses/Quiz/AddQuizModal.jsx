import React, { useState } from 'react';
import axios from 'axios';

const QuizModal = ({ isOpen, onClose, onSubmit, courseId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [passingMarks, setPassingMarks] = useState('');
  const token=localStorage.getItem('token');
  console.log(courseId)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/quiz/quizzes', {
        course_id: courseId,
        title,
        description,
        total_marks: totalMarks,
        passing_marks: passingMarks,
      },{
        headers:{
            Authorization: `Bearer ${token}`,
        }
      });
      onSubmit(response.data);
      onClose();
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };

  return (
    isOpen ? (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Add New Quiz</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Total Marks</label>
              <input
                type="number"
                value={totalMarks}
                onChange={(e) => setTotalMarks(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Passing Marks</label>
              <input
                type="number"
                value={passingMarks}
                onChange={(e) => setPassingMarks(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-4 bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Quiz
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : null
  );
};

export default QuizModal;
