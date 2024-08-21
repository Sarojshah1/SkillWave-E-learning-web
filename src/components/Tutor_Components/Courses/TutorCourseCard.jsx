import React from 'react';
import { useNavigate } from 'react-router-dom';

const TutorCourseCard = ({ course }) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tutor/courses/${course.id}/lessons`);
  };

  return (
    <div onClick={handleCardClick} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <img 
        src={course.thumbnail} 
        alt={`${course.title} Thumbnail`} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-800 leading-tight">{course.title}</h3>
        <p className="text-gray-600 mt-3 leading-relaxed">{course.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-gray-500 text-sm">{course.students} Students</span>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorCourseCard;
