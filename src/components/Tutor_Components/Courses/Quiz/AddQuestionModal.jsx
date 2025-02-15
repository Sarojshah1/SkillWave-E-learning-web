import React, { useState } from 'react';
import axios from 'axios';

const AddQuestionModal = ({ isOpen, onClose, onSubmit, quizId }) => {
  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('multiple-choice');
  const [options, setOptions] = useState(['']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const token = localStorage.getItem('token');

  // Handle changes in option fields
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  // Add a new empty option field
  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  // Remove an option field by index
  const handleRemoveOption = (index) => {
    if (options.length > 1) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  // Submit form data to the API
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newQuestion = {
        quiz_id: quizId,
        question_text: questionText,
        question_type: questionType,
        options,
        correct_answer: correctAnswer
      };
      const response = await axios.post('http://localhost:3000/api/question/questions', newQuestion, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      onSubmit(response.data); // Pass the new question data to the parent component
      onClose(); // Close the modal after submission
      window.location.reload();
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Add New Question</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Question Text</label>
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Question Type</label>
            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="multiple_choice">Multiple Choice</option>
              <option value="true-false">True/False</option>
              {/* Add more types if needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Options</label>
            {options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                {options.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(index)}
                    className="ml-2 text-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddOption}
              className="text-blue-500"
            >
              Add Option
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Correct Answer</label>
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuestionModal;
