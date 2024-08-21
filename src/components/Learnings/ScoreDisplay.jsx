import React from 'react';
import { animated } from '@react-spring/web';

const ScoreDisplay = ({ score, scoreAnimation }) => {
    return (
        <animated.div style={scoreAnimation} className="flex flex-col items-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <div className="text-4xl font-bold mb-2">
                Your Score: <span className="text-yellow-300">{score}</span> out of 20
            </div>
            <div className="text-lg text-gray-200 mt-1">
                Great job! Keep up the good work.
            </div>
            <div className="mt-4">
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
                    Continue Learning
                </button>
            </div>
        </animated.div>
    );
};

export default ScoreDisplay;
