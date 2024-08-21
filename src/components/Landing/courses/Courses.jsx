import React from 'react';
import CourseCard from '../../CourseCard/CourseCard';

const courses = [
    {
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Introduction to React',
        description: 'Learn the fundamentals of React and build interactive user interfaces.',
        price: 'Npr.499',
        duration: '4 weeks',
        level: 'Beginner',
        creator: 'Jane Doe',
        onClick: () => console.log('Introduction to React clicked'),
    },
    {
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Advanced JavaScript',
        description: 'Deep dive into JavaScript features and modern programming techniques.',
        price: 'Npr.5999',
        duration: '6 weeks',
        level: 'Advanced',
        creator: 'John Smith',
        onClick: () => console.log('Advanced JavaScript clicked'),
    },
    {
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Data Visualization with D3.js',
        description: 'Create beautiful and interactive data visualizations using D3.js.',
        price: 'Npr.6999',
        duration: '5 weeks',
        level: 'Intermediate',
        creator: 'Alice Johnson',
        onClick: () => console.log('Data Visualization with D3.js clicked'),
    },
    {
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Python for Data Science',
        description: 'Learn Python programming and data analysis for data science applications.',
        price: 'Npr.7990',
        duration: '8 weeks',
        level: 'Intermediate',
        creator: 'Emily Davis',
        onClick: () => console.log('Python for Data Science clicked'),
    },
    {
        thumbnail: 'https://via.placeholder.com/300',
        title: 'Digital Marketing Fundamentals',
        description: 'Understand the basics of digital marketing, SEO, and SEM strategies.',
        price: 'Npr.5999',
        duration: '4 weeks',
        level: 'Beginner',
        creator: 'Michael Brown',
        onClick: () => console.log('Digital Marketing Fundamentals clicked'),
    },
    {
        thumbnail: 'https://via.placeholder.com/300',
        title: 'UI/UX Design Bootcamp',
        description: 'Get hands-on experience with UI/UX design principles and tools.',
        price: 'Npr.8999',
        duration: '7 weeks',
        level: 'Advanced',
        creator: 'Sophia Wilson',
        onClick: () => console.log('UI/UX Design Bootcamp clicked'),
    },
];

const CoursesPage = () => {
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
                        onClick={course.onClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
