import React from 'react';
import { FaClock } from 'react-icons/fa';

const QuizTimer = ({ timer, formatTime }) => {
    return (
        <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 ml-12 mb-4 shadow-lg flex items-center space-x-4">
            <FaClock className="text-blue-500 text-3xl" />
            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">Time Remaining</h2>
                <div className="text-3xl font-semibold text-red-600">
                    {formatTime(timer)}
                </div>
            </div>
        </div>
    );
};

export default QuizTimer;
