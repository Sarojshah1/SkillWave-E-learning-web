import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizCard = ({ title, score, completionDate, description, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Example navigation, modify as needed
      navigate('/quiz-details'); 
    }
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-1"><strong>Score:</strong> {score}</p>
      <p className="text-gray-700 mb-2"><strong>Completed on:</strong> {completionDate}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default QuizCard;
