import React from 'react';
import { FaChevronRight, FaBook,FaQuestionCircle } from 'react-icons/fa';

const LessonList = ({ lessons, activeLesson, setActiveLesson, toggleQuiz, showQuiz }) => {
    return (
        <aside className="w-1/4 bg-white border-r border-gray-300 p-6 flex-shrink-0 fixed top-0 left-0 h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Course Lessons</h2>
            <ul className="space-y-4">
                {lessons.map((lesson) => (
                    <li
                        key={lesson.id}
                        className={`cursor-pointer p-4 rounded-lg flex items-center space-x-3 transition-colors duration-300 ease-in-out ${activeLesson === lesson.id ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                        onClick={() => {
                            setActiveLesson(lesson.id);
                            toggleQuiz(false);  // Hide quiz when switching lessons
                        }}
                    >
                        <FaBook className={`text-2xl ${activeLesson === lesson.id ? 'text-white' : 'text-gray-700'}`} />
                        <span className="font-medium">{lesson.title}</span>
                        <FaChevronRight className={`ml-auto transition-transform ${activeLesson === lesson.id ? 'rotate-90 text-white' : 'rotate-0'}`} />
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <button
                    className={`w-full p-3 rounded-lg text-white ${showQuiz ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'}`}
                    onClick={() => toggleQuiz(!showQuiz)}
                >
                    <FaQuestionCircle className="inline mr-2" />
                    {showQuiz ? 'Hide Quiz' : 'Show Quiz'}
                </button>
            </div>
        </aside>
    );
};

export default LessonList;
