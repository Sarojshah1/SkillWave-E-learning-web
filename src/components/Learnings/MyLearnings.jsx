import React, { useState, useEffect } from 'react';
import MyLearningsCard from './MyLearningsCard';
import axios from 'axios';



const MyLearnings = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:3000/api/enroll/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response)
        setCourses(response.data); // Assume response.data is the array of courses
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

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
