import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TutorCourseCard = ({ course }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tutor/courses/${course._id}/lessons`,{ state: { lessons: course.lessons,quizzes:course.quizzes } });
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div 
      onClick={handleCardClick} 
      className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <img 
        src={`http://localhost:3000/thumbnails/${course.thumbnail}`} 
        alt={`${course.title} Thumbnail`} 
        className="w-full h-48 object-contain rounded"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-800 leading-tight">{course.title}</h3>
        <p className="text-gray-600 mt-3 leading-relaxed">
          {isReadMore ? course.description : `${course.description.substring(0, 50)}...`}
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click event from firing
              toggleReadMore();
            }} 
            className="text-blue-500 ml-1"
          >
            {isReadMore ? 'Read Less' : 'Read More'}
          </button>
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-gray-500 text-sm">Npr.{course.price}</span>
          <button 
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorCourseCard;
