import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseCard from "../../CourseCard/CourseCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/courses");
                console.log(response.data);
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    const handleCardClick = (courseId, course) => {
        console.log(course);
        navigate(`/course-details/${courseId}`, { state: { course } });
    };

    return (
        <div className="p-8">
            {/* Heading Animation */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl font-bold mb-6 text-center"
            >
                Our Courses
            </motion.h2>

            {/* Courses Grid with Staggered Animation */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
            >
                {courses.map((course, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CourseCard
                            thumbnail={course.thumbnail}
                            title={course.title}
                            description={course.description}
                            price={course.price}
                            duration={course.duration}
                            level={course.level}
                            creator={course.created_by.name}
                            onClick={() => handleCardClick(course._id, course)}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CoursesPage;
