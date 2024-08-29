import React, { useState, useEffect } from 'react';
import CourseCard from '../../CourseCard/CourseCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const CoursesPage = () => {
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
    const handleCardClick = (courseId,course) => {
        console.log(course);
        navigate(`/course-details/${courseId}`, { state: { course } }); // Replace with your actual route
    };
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        thumbnail={course.thumbnail}
                        title={course.title}
                        description={course.description}
                        price={course.price}
                        duration={course.duration}
                        level={course.level}
                        creator={course.created_by.
                            name}
                        onClick={() => handleCardClick(course._id,course)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
