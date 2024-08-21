import React, { useState, useEffect } from 'react';
import LessonList from './LessonList';
import Quiz from './Quiz';
import LessonContent from './LessonContent';
import QuizTimer from './QuizTimer';
import ScoreDisplay from './ScoreDisplay';
import { useSpring } from '@react-spring/web';


const CourseContentPage = () => {
    const [activeLesson, setActiveLesson] = useState(1);
    const [showQuiz, setShowQuiz] = useState(false);
    const [answers, setAnswers] = useState({});
    const [timer, setTimer] = useState(300); // 5 minutes timer
    const [intervalId, setIntervalId] = useState(null);
    const [score, setScore] = useState(null);

    const lessons = [
        { id: 1, title: "Introduction to React", videoUrl: "https://www.youtube.com/watch?v=SqcY0GlETPk", content: "Learn the basics of React including components, state, and props. This lesson covers the fundamentals required to start building React applications." },
        { id: 2, title: "React Components", videoUrl: "https://www.youtube.com/watch?v=RGKi6LSPDLU", content: "Understand how to build and manage components in React. This includes functional and class components, props, and state management." },
        { id: 3, title: "State Management", videoUrl: "https://www.youtube.com/watch?v=eILUmCJhl64", content: "Dive into state management and how to use hooks effectively, such as useState and useReducer, to handle state in your React applications." },
        { id: 4, title: "React Router", videoUrl: "https://www.youtube.com/watch?v=RGKi6LSPDLU", content: "Learn how to handle routing in React applications using React Router, including setting up routes and navigation between pages." },
        { id: 5, title: "Effect Hook", videoUrl: "https://www.youtube.com/watch?v=RGKi6LSPDLU", content: "Explore the useEffect hook and its applications for handling side effects, such as fetching data and updating the DOM." },
        { id: 6, title: "Context API", videoUrl: "https://www.youtube.com/watch?v=eILUmCJhl64", content: "Understand how to use Context API for state management across multiple components without having to pass props down manually." },
        { id: 7, title: "Performance Optimization", videoUrl: "https://www.youtube.com/watch?v=RGKi6LSPDLU", content: "Learn techniques to optimize React application performance, including memoization, lazy loading, and avoiding unnecessary re-renders." },
        { id: 8, title: "Custom Hooks", videoUrl: "https://www.youtube.com/watch?v=RGKi6LSPDLU", content: "Discover how to create and use custom hooks to encapsulate and reuse logic across different components." },
        { id: 9, title: "Testing React Components", videoUrl: "https://www.youtube.com/watch?v=eILUmCJhl64", content: "Learn how to test React components using testing libraries such as React Testing Library and Jest, ensuring your components work as expected." },
        { id: 10, title: "Deploying React Applications", videoUrl: "https://www.youtube.com/watch?v=RGKi6LSPDLU", content: "Understand how to deploy and manage React applications in production environments, including setting up CI/CD pipelines and deploying to platforms like Vercel and Netlify." }
    ];

    const quizzes = [
        { id: 1, question: "What is the primary function of React?", options: ["Routing", "State Management", "Component Building", "Data Fetching"], answer: "Component Building" },
        { id: 2, question: "Which hook is used to manage state in a functional component?", options: ["useEffect", "useReducer", "useState", "useContext"], answer: "useState" },
        { id: 3, question: "What does the Context API provide?", options: ["Routing", "State Management", "Component Styling", "Data Fetching"], answer: "State Management" },
        { id: 4, question: "What is the purpose of the `useEffect` hook?", options: ["Managing State", "Handling Side Effects", "Routing", "Context Management"], answer: "Handling Side Effects" },
        { id: 5, question: "How do you pass data between components in React?", options: ["Through Context API", "Using Props", "Via Global State", "With Redux"], answer: "Using Props" },
        { id: 6, question: "Which library is commonly used for routing in React applications?", options: ["React Router", "Redux", "React Query", "React Testing Library"], answer: "React Router" },
        { id: 7, question: "What is memoization used for in React?", options: ["State Management", "Performance Optimization", "Routing", "Data Fetching"], answer: "Performance Optimization" },
        { id: 8, question: "What is a custom hook in React?", options: ["A hook that allows component reusability", "A hook for state management", "A hook for routing", "A built-in React feature"], answer: "A hook that allows component reusability" },
        { id: 9, question: "Which testing library is commonly used with React?", options: ["Jest", "Mocha", "Chai", "Cypress"], answer: "Jest" },
        { id: 10, question: "How can you improve the performance of a React application?", options: ["Code Splitting", "Using More Components", "Increasing State Updates", "Adding More Libraries"], answer: "Code Splitting" },
        { id: 11, question: "What does the `useReducer` hook help with?", options: ["State Management", "Side Effects", "Context Management", "Routing"], answer: "State Management" },
        { id: 12, question: "Which component type does React use to handle side effects?", options: ["Functional Components", "Class Components", "Pure Components", "Memo Components"], answer: "Functional Components" },
        { id: 13, question: "What is the purpose of lazy loading in React?", options: ["Performance Optimization", "Component Creation", "State Management", "Routing"], answer: "Performance Optimization" },
        { id: 14, question: "What is the main purpose of React's `useContext` hook?", options: ["Access Context Data", "Manage State", "Handle Side Effects", "Routing"], answer: "Access Context Data" },
        { id: 15, question: "How can you test React components?", options: ["Using Jest and React Testing Library", "Using Mocha and Chai", "Using Cypress", "Using Enzyme"], answer: "Using Jest and React Testing Library" },
        { id: 16, question: "Which method is used to deploy React applications?", options: ["Vercel", "Github Pages", "Netlify", "All of the Above"], answer: "All of the Above" },
        { id: 17, question: "What does the `useMemo` hook help with?", options: ["Optimizing Performance", "Managing State", "Handling Side Effects", "Context Management"], answer: "Optimizing Performance" },
        { id: 18, question: "What is the React fragment used for?", options: ["Grouping Multiple Elements", "Handling State", "Routing", "Managing Effects"], answer: "Grouping Multiple Elements" },
        { id: 19, question: "What is Redux used for in React applications?", options: ["State Management", "Routing", "Context Management", "Testing"], answer: "State Management" },
        { id: 20, question: "Which React hook is used to perform side effects after component render?", options: ["useEffect", "useState", "useContext", "useCallback"], answer: "useEffect" }
    ];

    const handleAnswerChange = (quizId, option) => {
        setAnswers(prev => ({ ...prev, [quizId]: option }));
    };

    const calculateScore = () => {
        const correctAnswers = quizzes.filter(quiz => answers[quiz.id] === quiz.answer).length;
        setScore(correctAnswers);
        setShowQuiz(false); // Optionally hide quiz after submission
        clearInterval(intervalId);
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

    return (
        <div className="flex">
            <LessonList
                lessons={lessons}
                activeLesson={activeLesson}
                setActiveLesson={setActiveLesson}
                toggleQuiz={setShowQuiz}
                showQuiz={showQuiz}
            />
            <div className="flex-1 ml-64 p-8">
            {showQuiz ? (
                    <>
                        <QuizTimer timer={timer} formatTime={formatTime} />
                        <Quiz
                            quizzes={quizzes}
                            handleAnswerChange={handleAnswerChange}
                            answers={answers}
                            calculateScore={calculateScore}
                            timer={timer}
                            formatTime={formatTime}
                            score={score}
                        />
                        
                    </>
                ) : (
                    <LessonContent
                        lesson={lessons.find(lesson => lesson.id === activeLesson)}
                        getYouTubeVideoId={(url) => url.split('v=')[1]?.split('&')[0]}
                    />
                )}
            </div>
        </div>
    );
};

export default CourseContentPage;
