import React, { useState } from 'react';
import Certificate from './certificate/Certificate'; // Assuming the Certificate component is in the same directory

const Quiz = ({ quizzes, handleAnswerChange, answers, calculateScore, timer, formatTime, score }) => {
    const [showCertificate, setShowCertificate] = useState(false);
    const allQuestionsAnswered = Object.keys(answers).length === quizzes.length;

    return (
        <div className="bg-white p-4 md:p-8 ml-4 md:ml-12 rounded-lg border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Quiz</h2>
            {!score && (
                <>
                    <div className="relative">
                        <div className="absolute top-0 right-0 p-2 text-xs md:text-sm text-gray-500">
                            Question {Object.keys(answers).length} of {quizzes.length}
                        </div>
                        {quizzes.map((quiz) => (
                            <div key={quiz.id} className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-50 rounded-lg shadow-sm">
                                <p className="font-semibold mb-2 text-base md:text-lg">{quiz.question}</p>
                                <ul className="list-disc pl-4 md:pl-5 space-y-2 text-gray-700">
                                    {quiz.options.map((option, index) => (
                                        <li 
                                            key={index} 
                                            className={`flex items-center ${answers[quiz.id] === option ? 'bg-blue-100' : ''} hover:bg-gray-100 p-2 rounded-md transition-colors`}
                                        >
                                            <input
                                                type="radio"
                                                id={`quiz-${quiz.id}-option-${index}`}
                                                name={`quiz-${quiz.id}`}
                                                value={option}
                                                checked={answers[quiz.id] === option}
                                                onChange={() => handleAnswerChange(quiz.id, option)}
                                                className="mr-2"
                                            />
                                            <label htmlFor={`quiz-${quiz.id}-option-${index}`}>{option}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <button
                        className="w-full p-3 rounded-lg bg-blue-500 text-white mt-4 hover:bg-blue-600 disabled:opacity-50"
                        onClick={calculateScore}
                        disabled={!allQuestionsAnswered} // Disable button if not all questions are answered
                    >
                        Submit Quiz
                    </button>
                </>
            )}
            {score !== null && (
                <div className="bg-green-100 border border-green-200 rounded-lg p-4 mt-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Your Score</h3>
                    <div className="text-xl md:text-2xl font-semibold text-green-600">
                        {score} out of {quizzes.length}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 mt-2">
                        Great job! You've completed the quiz.
                    </div>
                    <button
                        className="w-full p-3 rounded-lg bg-blue-500 text-white mt-4 hover:bg-blue-600"
                        onClick={() => setShowCertificate(true)}
                    >
                        View Your Certificate
                    </button>
                </div>
            )}

            {showCertificate && (
                <div className="mt-8">
                    <Certificate 
                        courseName="React Development Mastery" 
                        studentName="John Doe" 
                        instructorName="saroj"
                        date="August 18, 2024" 
                    />
                </div>
            )}
        </div>
    );
};

export default Quiz;
