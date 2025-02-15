import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AddQuestionModal from './AddQuestionModal'; // Import the modal component

const QuizQuestionPage = () => {
  const navigate = useNavigate();
  const { courseId, quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token =localStorage.getItem('token');
  console.log(courseId, quizId);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/quiz/quizzes/${quizId}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        setQuiz(response.data);
        setQuestions(response.data.questions || []);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, [quizId]);

  const handleQuestionClick = (questionId) => {
    navigate(`/tutor/courses/${courseId}/quizzes/${quizId}/questions/${questionId}`);
  };

  const handleAddQuestion = async (newQuestion) => {
    try {
      const { data } = await axios.post('/api/questions', newQuestion);
      setQuestions([...questions, data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Quiz: {quiz?.title}</h1>
        
        <div className="mb-8">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-transform transform hover:scale-105"
          >
            Add New Question
          </button>
        </div>
        
        <ul className="space-y-8">
          {questions.map(question => (
            <li
              key={question._id}
              onClick={() => handleQuestionClick(question._id)}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105 hover:bg-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-700">{question.question_text}</h3>
              <div className="mt-4">
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input 
                      type="radio" 
                      id={`option-${question._id}-${index}`} 
                      name={`question-${question._id}`} 
                      disabled 
                      className="mr-2"
                    />
                    <label htmlFor={`option-${question._id}-${index}`} className="text-gray-600">{option}</label>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-500">Correct Answer: {question.correct_answer}</p>
            </li>
          ))}
        </ul>
      </div>

      <AddQuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddQuestion}
        quizId={quizId}
      />
    </div>
  );
};

export default QuizQuestionPage;
