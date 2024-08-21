import React from 'react';
import MyLearningsCard from './MyLearningsCard';

const courses = [
  {
    thumbnail: "https://via.placeholder.com/100x100",
    title: "Introduction to React",
    description: "Learn the basics of React, including components, props, and state.",
    progress: 60,
    totalLessons: 12,
  },
  {
    thumbnail: "https://via.placeholder.com/100x100",
    title: "Advanced JavaScript",
    description: "Deep dive into JavaScript ES6+ features and advanced concepts.",
    progress: 40,
    totalLessons: 15,
  },
  // Add more courses as needed
];

const MyLearnings = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Learnings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <MyLearningsCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLearnings;
