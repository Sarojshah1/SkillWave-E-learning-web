import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, ArcElement } from 'chart.js';
import { FaBook, FaUser, FaDollarSign, FaCalendarAlt, FaStar } from 'react-icons/fa';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, ArcElement);

const TutorDashboard = () => {
  // Data for Line Chart (Course Enrollments)
  const courseEnrollmentData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Enrollments',
        data: [10, 25, 30, 20, 40, 35, 50],
        fill: false,
        borderColor: '#4A90E2',
        tension: 0.1,
      },
    ],
  };

  // Data for Pie Chart (Student Distribution by Level)
  const studentDistributionData = {
    labels: ['Beginner', 'Intermediate', 'Advanced'],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-teal-900">Tutor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Widget 1: Courses */}
        <div className="bg-gradient-to-r from-teal-300 to-teal-500 p-6 rounded-lg shadow-lg flex items-center justify-between transform hover:scale-105 transition-transform duration-300">
          <div>
            <h2 className="text-2xl font-semibold text-white">Courses</h2>
            <p className="text-lg text-gray-200">5</p>
          </div>
          <FaBook className="text-white text-4xl" />
        </div>
        
        {/* Widget 2: Students */}
        <div className="bg-gradient-to-r from-blue-300 to-blue-500 p-6 rounded-lg shadow-lg flex items-center justify-between transform hover:scale-105 transition-transform duration-300">
          <div>
            <h2 className="text-2xl font-semibold text-white">Students</h2>
            <p className="text-lg text-gray-200">400</p>
          </div>
          <FaUser className="text-white text-4xl" />
        </div>
        
        {/* Widget 3: Payments */}
        <div className="bg-gradient-to-r from-green-300 to-green-500 p-6 rounded-lg shadow-lg flex items-center justify-between transform hover:scale-105 transition-transform duration-300">
          <div>
            <h2 className="text-2xl font-semibold text-white">Payments</h2>
            <p className="text-lg text-gray-200">50,000</p>
          </div>
          <FaDollarSign className="text-white text-4xl" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Line Chart: Course Enrollments */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-900 mb-4">Course Enrollments</h2>
          <Line data={courseEnrollmentData} />
        </div>

        {/* Pie Chart: Student Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-900 mb-4">Student Distribution</h2>
          <Pie data={studentDistributionData} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-teal-900 mb-4">Recent Activities</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <FaBook className="text-teal-500 text-2xl" />
            <p className="text-gray-700">Added new course: "React Basics"</p>
          </li>
          <li className="flex items-center space-x-3">
            <FaUser className="text-teal-500 text-2xl" />
            <p className="text-gray-700">New student enrolled: John Doe</p>
          </li>
          <li className="flex items-center space-x-3">
            <FaDollarSign className="text-teal-500 text-2xl" />
            <p className="text-gray-700">Payment received from Sarah Lee</p>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
            Add New Course
          </button>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
            View Students
          </button>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
            Manage Payments
          </button>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
            Manage Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
