import React, { useState, useEffect } from 'react';
import LessonList from './LessonList';
import Quiz from './Quiz';
import LessonContent from './LessonContent';
import QuizTimer from './QuizTimer';
import ScoreDisplay from './ScoreDisplay';
import { useSpring } from '@react-spring/web';
import { useParams,useLocation } from 'react-router-dom';
import axios from 'axios';

const CourseContentPage = () => {
    const location=useLocation();
    const {enrollid,progress}=location.state;
    console.log(enrollid)
    console.log(progress)
    const [activeLesson, setActiveLesson] = useState(null);
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [showQuiz, setShowQuiz] = useState(false);
    const [answers, setAnswers] = useState({});
    const [timer, setTimer] = useState(300); // 5 minutes timer
    const [intervalId, setIntervalId] = useState(null);
    const [score, setScore] = useState(null);
    const [lessons, setLessons] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [courseData, setCourseData] = useState(null);
    const { id } = useParams();
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/courses/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log(response)
                setCourseData(response.data);
                setLessons(response.data.lessons);
                setActiveLesson(response.data.lessons[0]._id); 
                setQuizzes(response.data.quizzes );
            } catch (error) {
                console.error("Error fetching course data:", error);
            }
        };

        fetchCourseData();
    }, [id]);

    console.log(quizzes._id)

    const handleAnswerChange = (quizId, option) => {
        setAnswers(prev => ({ ...prev, [quizId]: option }));
    };

   

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    useEffect(() => {
        if (timer > 0 && showQuiz) {
            const id = setInterval(() => setTimer(t => t - 1), 1000);
            setIntervalId(id);
            return () => clearInterval(id);
        }
    }, [timer, showQuiz]);

    const scoreAnimation = useSpring({
        opacity: score !== null ? 1 : 0,
        transform: score !== null ? 'scale(1)' : 'scale(0.9)',
        config: { duration: 500 }
    });

    const markAsRead = async () => {
        const completedLessons = lessons.filter(lesson => lesson._id === activeLesson).length;
        const totalLessons = lessons.length;
        const updatedProgress = progress+(completedLessons / totalLessons) * 100;
        try {
            await axios.put(`http://localhost:3000/api/enroll/${enrollid}`, {
                progress: updatedProgress
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Lesson marked as read!');
        } catch (error) {
            console.error("Error marking lesson as read:", error);
        }
    };

    if (!courseData || !lessons.length) {
        return <div className="text-center text-lg font-semibold mt-20">Loading...</div>;
    }

    return (
        <div className="flex flex-col h-screen">
            {/* Header with the Mark as Read button */}
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="flex justify-center">
                    <button 
                        onClick={markAsRead} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Mark as Read
                    </button>
                </div>
            </header>
            
            <div className="flex flex-1">
                {/* Sidebar with Lesson List */}
                <aside className="w-64 bg-gray-200 p-4 shadow-lg">
                    <LessonList
                        lessons={lessons}
                        quizzes={quizzes}
                        activeLesson={activeLesson}
                        setActiveLesson={setActiveLesson}
                        toggleQuiz={setShowQuiz}
                        showQuiz={showQuiz}
                        setSelectedQuiz={setSelectedQuiz}
                    />
                    
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-8 bg-gray-100">
                {showQuiz && selectedQuiz ? (
                        <div className="flex flex-col items-center">
                            <QuizTimer timer={timer} formatTime={formatTime} />
                            <Quiz
                                quizId={selectedQuiz._id}
                                handleAnswerChange={handleAnswerChange}
                                answers={answers}
                                // calculateScore={calculateScore}
                                timer={timer}
                                formatTime={formatTime}
                                courseId={courseData._id}
                                // score={score}
                            />
                        </div>
                    ) : (
                        <LessonContent
                            lesson={lessons.find(lesson => lesson._id === activeLesson)}
                            getYouTubeVideoId={(url) => url.split('v=')[1]?.split('&')[0]}
                        />
                    )}
                </main>
            </div>
        </div>
    );
};

export default CourseContentPage;
