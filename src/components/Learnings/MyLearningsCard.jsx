import React from 'react';
import { FaCheckCircle, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const MyLearningsCard = ({ course }) => {
  const { thumbnail, title, description, progress, totalLessons } = course;
  const navigate = useNavigate(); // Initialize navigate function

  const handleCardClick = () => {
    // Navigate to a detailed course page or perform another action
    navigate(`/content`);
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col cursor-pointer"
      whileHover={{ scale: 1.03 }} // Smooth scaling animation on hover
      onClick={handleCardClick} // Handle click internally
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-col mb-4">
        <span className="text-gray-800 font-medium mb-1 flex items-center">
          <FaCheckCircle className="text-primary mr-2" /> Progress
        </span>
        <div className="relative w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div
            className="absolute top-0 left-0 bg-primary h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-gray-600 text-sm">{progress}% Complete</span>
      </div>
      <div className="flex items-center text-gray-600 text-sm">
        <FaChalkboardTeacher className="text-primary mr-2" />
        <span className="font-medium text-gray-800">Total Lessons:</span> {totalLessons}
      </div>
    </motion.div>
  );
};

export default MyLearningsCard;
