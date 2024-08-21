import React from 'react';
import CourseCard from './TutorCourseCard';

const TutorCourses = () => {
  // Sample data for courses
  const courses = [
    {
      id:1,
      title: 'React for Beginners',
      description: 'Learn the basics of React, including components, state, and props.',
      students: 120,
      thumbnail: 'https://via.placeholder.com/300x200.png?text=React+Course',
    },
    {
      id:2,
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts like closures, promises, and async/await.',
      students: 200,
      thumbnail: 'https://via.placeholder.com/300x200.png?text=JavaScript+Course',
    },
    {
      id:3,
      title: 'UI/UX Design Basics',
      description: 'Explore the fundamentals of UI/UX design, including wireframing and prototyping.',
      students: 150,
      thumbnail: 'https://via.placeholder.com/300x200.png?text=Design+Course',
    },
    {
      id:4,
      title: 'Full Stack Development',
      description: 'Master both frontend and backend development with this comprehensive course.',
      students: 180,
      thumbnail: 'https://via.placeholder.com/300x200.png?text=Full+Stack+Course',
    },
    {
      id:5,
      title: 'Data Structures & Algorithms',
      description: 'Understand data structures and algorithms to improve your coding skills.',
      students: 170,
      thumbnail: 'https://via.placeholder.com/300x200.png?text=DSA+Course',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default TutorCourses;
