import React, { useState, useEffect } from 'react';
import CourseCard from './TutorCourseCard';
import axios from 'axios';
import noresult from '../../../assets/nocontent.png';

const TutorCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCourses = async () => {
      const id = localStorage.getItem("userid");
      console.log(id);
      try {
        const response = await axios.get(`http://localhost:3000/api/courses/creator/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        }); // Adjust the API endpoint as needed
        console.log(response);
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, [token]); // Adding token as a dependency if it changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {courses.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <img src={noresult} alt="No content available" className="w-3/4 md:w-1/2 lg:w-1/3 h-auto" /> 
          <p className="mt-4 text-lg">No courses to show</p>
        </div>
      ) : (
        courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))
      )}
    </div>
  );
};

export default TutorCourses;
