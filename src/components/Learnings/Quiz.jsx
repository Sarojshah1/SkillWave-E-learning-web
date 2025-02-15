import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Certificate from './certificate/Certificate'; // Assuming the Certificate component is in the same directory

const passingMarks = 0.75;
const Quiz = ({ quizId, handleAnswerChange, answers, timer, formatTime,courseId }) => {
    console.log('courseid', courseId);
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showCertificate, setShowCertificate] = useState(false);
    const [score, setScore] = useState(null);
    const [percentage, setPercentage] = useState(null);
    const token = localStorage.getItem('token');
    const [intervalId, setIntervalId] = useState(null);
    const [name,setName]=useState(null);
    const [title,setTitle]=useState(null);

    
    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/quiz/quizzes/${quizId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const responses = await axios.get(`http://localhost:3000/api/user/profile/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const coursename = await axios.get(`http://localhost:3000/api/courses/${courseId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(coursename);
                setTitle(coursename.data.title);
                console.log(responses)
                setName(responses.data.name)
                setQuizzes(response.data.questions);
                setLoading(false);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
                setError('Failed to load quizzes.');
                setLoading(false);
            }
        };

        fetchQuizzes();

        // Clean up the interval if needed
        return () => clearInterval(intervalId);
    }, [quizId, token, intervalId]); // Dependency array ensures the effect runs when quizId or token changes

    const calculateScore = async() => {
        console.log(answers)
        const correctAnswers = quizzes.filter(quiz => answers[quiz._id] === quiz.correct_answer).length;
        const totalQuestions = quizzes.length;
        const scorePercentage = (correctAnswers / totalQuestions) * 100;
        setScore(correctAnswers);
        setPercentage(scorePercentage);
        clearInterval(intervalId);
        const response = await axios.post(`http://localhost:3000/api/result`,{
            quiz_id: quizId,
            score:scorePercentage,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
    };
    const isPassing = percentage >= (passingMarks * 100);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const allQuestionsAnswered = Object.keys(answers).length === quizzes.length;

    return (
        <div className="w-full bg-white p-4 md:p-8 ml-4 md:ml-12 rounded-lg border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Quiz</h2>
            {!score && (
                <>
                    <div className="relative">
                        <div className="absolute top-0 right-0 p-2 text-xs md:text-sm text-gray-500">
                            Question {Object.keys(answers).length} of {quizzes.length}
                        </div>
                        {quizzes.map((quiz) => (
                            <div key={quiz._id} className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-50 rounded-lg shadow-sm">
                                <p className="font-semibold mb-2 text-base md:text-lg">{quiz.question_text}</p>
                                <ul className="list-disc pl-4 md:pl-5 space-y-2 text-gray-700">
                                    {quiz.options.map((option, index) => (
                                        <li 
                                            key={index} 
                                            className={`flex items-center ${answers[quiz._id] === option ? 'bg-blue-100' : ''} hover:bg-gray-100 p-2 rounded-md transition-colors`}
                                        >
                                            <input
                                                type="radio"
                                                id={`quiz-${quiz._id}-option-${index}`}
                                                name={`quiz-${quiz._id}`}
                                                value={option}
                                                checked={answers[quiz._id] === option}
                                                onChange={() => handleAnswerChange(quiz._id, option)}
                                                className="mr-2"
                                            />
                                            <label htmlFor={`quiz-${quiz._id}-option-${index}`}>{option}</label>
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
                        {score} out of {quizzes.length} ({percentage.toFixed(2)}%)
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 mt-2">
                        Great job! You've completed the quiz.
                    </div>
                    {isPassing && (
                        <button
                            className="w-full p-3 rounded-lg bg-blue-500 text-white mt-4 hover:bg-blue-600"
                            onClick={() => setShowCertificate(true)}
                        >
                            Generate Your Certificate
                        </button>
                    )}
                    {!isPassing && (
                        <div className="text-red-500 mt-4">
                            You need {Math.ceil(passingMarks * 100 - percentage)}% more to pass.
                        </div>
                    )}
                </div>
            )}

            {showCertificate && (
                <div className="mt-8">
                    <Certificate 
                        courseName={title}
                        studentName={name} 
                        instructorName="Saroj shah"
                        courseId={courseId}
                        // date= {new Date()}
                    />
                </div>
            )}
        </div>
    );
};

export default Quiz;
