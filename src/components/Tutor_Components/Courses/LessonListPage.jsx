import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import AddLessonModal from './AddLessonModal'; // Import the modal component
import AddQuizModal from './Quiz/AddQuizModal'

const LessonListPage = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const location = useLocation();
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const initialLessons = location.state?.lessons || [];
  const initialQuizzes = location.state?.quizzes || [];
  const [lessons, setLessons] = useState(initialLessons);
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  console.log(lessons);


  const handleLessonClick = (lessonId) => {
    navigate(`/tutor/courses/${courseId}/lessons/${lessonId}`, { state: { lessons } });
  };
  const handleQuizClick = (quizId) => {
    navigate(`/tutor/courses/${courseId}/quizzes/${quizId}`);
  };

  const handleAddLesson = (newLesson) => {
    // Logic to add a new lesson, e.g., send data to the server
    setLessons([...lessons, { ...newLesson, id: (lessons.length + 1).toString() }]);
  };

  const handleAddQuiz = (newQuiz) => {
    setQuizzes([...quizzes, { ...newQuiz, id: (quizzes.length + 1).toString() }]);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Lessons & Quizzes</h1>
      
      <div className="mb-8 flex space-x-4">
        <button 
          onClick={() => setIsLessonModalOpen(true)} 
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-green-600 hover:to-teal-600 transition-transform transform hover:scale-105"
        >
          Add New Lesson
        </button>
        <button 
          onClick={() => setIsQuizModalOpen(true)} 
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-transform transform hover:scale-105"
        >
          Add New Quiz
        </button>
      </div>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Lessons</h2>
          <ul className="space-y-4">
            {lessons.map(lesson => (
              <li
                key={lesson._id}
                onClick={() => handleLessonClick(lesson._id)}
                className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105 hover:bg-gray-100"
              >
                <h3 className="text-2xl font-semibold text-gray-700">{lesson.title}</h3>
                <p className="text-gray-500 mt-2">{lesson.content}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Quizzes</h2>
          <ul className="space-y-4">
            {quizzes.map(quiz => (
              <li
                key={quiz._id}
                onClick={() => handleQuizClick(quiz._id)}
                className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105 hover:bg-gray-100"
              >
                <h3 className="text-2xl font-semibold text-gray-700">{quiz.title}</h3>
                <p className="text-gray-500 mt-2">{quiz.description}</p>
                <p className="text-gray-500 mt-2">Total Marks: {quiz.total_marks}</p>
                <p className="text-gray-500 mt-2">Passing Marks: {quiz.passing_marks}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <AddLessonModal
        isOpen={isLessonModalOpen}
        onClose={() => setIsLessonModalOpen(false)}
        onSubmit={handleAddLesson}
        courseId={courseId}
      />
      
      <AddQuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        onSubmit={handleAddQuiz}
        courseId={courseId}
      />
    </div>
  </div>
  );
};

export default LessonListPage;
