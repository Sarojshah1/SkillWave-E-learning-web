import React from 'react';
import { FaChevronRight, FaBook } from 'react-icons/fa';

const LessonList = ({ quizzes, lessons, activeLesson, setActiveLesson, toggleQuiz, showQuiz, setSelectedQuiz }) => {
    return (
        <aside className="w-1/4 bg-white border-r border-gray-300 p-6 flex-shrink-0 fixed top-0 left-0 h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Course Lessons</h2>
            <ul className="space-y-4">
                {lessons.map((lesson) => (
                    <li
                        key={lesson._id}
                        className={`cursor-pointer p-4 rounded-lg flex items-center space-x-3 transition-colors duration-300 ease-in-out ${activeLesson === lesson._id ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                        onClick={() => {
                            setActiveLesson(lesson._id);
                            toggleQuiz(false);  // Hide quiz when switching lessons
                            setSelectedQuiz(null); // Deselect quiz when switching to a lesson
                        }}
                    >
                        <FaBook className={`text-2xl ${activeLesson === lesson._id ? 'text-white' : 'text-gray-700'}`} />
                        <span className="font-medium">{lesson.title}</span>
                        <FaChevronRight className={`ml-auto transition-transform ${activeLesson === lesson._id ? 'rotate-90 text-white' : 'rotate-0'}`} />
                    </li>
                ))}
            </ul>
            {/* Quiz List */}
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Available Quizzes</h2>
                <ul className="space-y-2">
                    {quizzes.map((quiz) => (
                        <li
                            key={quiz._id}
                            className={`cursor-pointer p-3 rounded-lg ${showQuiz &&  quiz._id ? 'bg-blue-100' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                            onClick={() => {
                                setSelectedQuiz(quiz);
                                setActiveLesson(null); // Deselect lesson when selecting a quiz
                                toggleQuiz(true); // Show quiz when selected
                            }}
                        >
                            {quiz.title}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default LessonList;
