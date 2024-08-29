import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import AddLessonModal from './AddLessonModal'; // Import the modal component

const LessonListPage = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialLessons = location.state?.lessons || [];
  const [lessons, setLessons] = useState(initialLessons);
  console.log(lessons);


  const handleLessonClick = (lessonId) => {
    navigate(`/tutor/courses/${courseId}/lessons/${lessonId}`, { state: { lessons } });
  };

  const handleAddLesson = (newLesson) => {
    // Logic to add a new lesson, e.g., send data to the server
    setLessons([...lessons, { ...newLesson, id: (lessons.length + 1).toString() }]);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Lessons</h1>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="mb-8 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-green-600 hover:to-teal-600 transition-transform transform hover:scale-105"
        >
          Add New Lesson
        </button>
        <ul className="space-y-4">
          {lessons.map(lesson => (
            <li
              key={lesson._id}
              onClick={() => handleLessonClick(lesson._id)}
              className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105 hover:bg-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-700">{lesson.title}</h2>
              <p className="text-gray-500 mt-2">{lesson.content}</p>
            </li>
          ))}
        </ul>
        <AddLessonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddLesson}
          courseId={courseId}
        />
      </div>
    </div>
  );
};

export default LessonListPage;
