import React from 'react';
import CourseCard from '../../CourseCard/CourseCard';
import { useNavigate } from 'react-router-dom';


const courses = [
    {
        id:1,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Web Development',
        description: 'Build websites with HTML, CSS, and JavaScript.',
        price: '1999',
        duration: '12 weeks',
        level: 'Beginner',
        creator: 'John Doe',
    },
    {
        id:2,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Data Science',
        description: 'Analyze data and create visualizations using Python.',
        price: '2999',
        duration: '16 weeks',
        level: 'Intermediate',
        creator: 'Jane Smith',
    },
    {
        id:3,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Digital Marketing',
        description: 'Master SEO, SEM, and social media strategies.',
        price: '1499',
        duration: '8 weeks',
        level: 'Advanced',
        creator: 'Emily Johnson',
    },
    {
        id:4,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Graphic Design',
        description: 'Learn design principles and tools like Photoshop and Illustrator.',
        price: '1999',
        duration: '10 weeks',
        level: 'Beginner',
        creator: 'Michael Brown',
    },
    {
        id:5,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Machine Learning',
        description: 'Explore algorithms and build models using machine learning techniques.',
        price: '19999',
        duration: '14 weeks',
        level: 'Advanced',
        creator: 'Lisa White'
    },
    {
        id:6,
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Cybersecurity',
        description: 'Understand security threats and how to protect systems.',
        price: '1999',
        duration: '12 weeks',
        level: 'Intermediate',
        creator: 'James Wilson',
    }
];

const CoursesPage = () => {
    const navigate = useNavigate();

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
                        creator={course.creator}
                        onClick={() => handleCardClick(course.id,course)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
