import React, { useState,useEffect } from 'react';
import CourseCard from '../CourseCard/CourseCard'; // Ensure this path is correct
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch courses from the backend
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/courses'); // Adjust the endpoint as needed
                console.log(response.data);
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // const navigate = useNavigate();

    const handleCardClick = (courseId,course) => {
        console.log(course);
        navigate(`/course-details/${courseId}`, { state: { course } }); // Replace with your actual route
    };

    return (
        <div className="bg-gradient-to-r   min-h-screen py-4">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Discover Our Courses</h1>
                <div className="relative mb-10">
                    <input
                        type="text"
                        placeholder="Search for courses..."
                        className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute top-5 left-4 text-gray-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course, index) => (
                            <CourseCard
                                key={index}
                                thumbnail={course.thumbnail}
                                title={course.title}
                                description={course.description}
                                price={course.price}
                                duration={course.duration}
                                level={course.level}
                                creator={course.creator}
                                onClick={() => handleCardClick(course.id,course)}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-600">
                            <p className="text-lg">No courses found. Try a different search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoursePage;