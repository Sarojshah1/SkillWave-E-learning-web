import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaChalkboardTeacher, FaBook, FaCalendarAlt, 
  FaEnvelope, FaCogs, FaDollarSign, FaBlog, FaStar,
  FaChevronDown, FaChevronUp, FaList, FaPlus 
  , FaHeadset
} from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isBlogsDropdownOpen, setIsBlogsDropdownOpen] = useState(false);

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const toggleBlogsDropdown = () => {
    setIsBlogsDropdownOpen(!isBlogsDropdownOpen);
  };

  return (
    <div className="bg-gradient-to-b from-teal-700 to-teal-900 text-white w-64 h-screen p-6 flex flex-col shadow-2xl">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="w-16 h-16 rounded-full mb-2 border-2 border-white transition-transform transform hover:scale-105"
        />
        <div className="text-center">
          <h3 className="text-lg font-semibold">Tutor Name</h3>
          <p className="text-sm text-gray-300 mb-1">tutor@example.com</p>
          <div className="flex items-center justify-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm">4.5</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <ul className="flex-1">
        <li className="mb-4">
          <NavLink 
            to="/tutor/dashboard" 
            className={({ isActive }) => `flex items-center text-white hover:text-teal-300 transition duration-200 ease-in-out transform ${isActive ? 'font-bold' : 'text-white'}`} 
          >
            <FaChalkboardTeacher className="mr-3" /> Dashboard
          </NavLink>
        </li>

        {/* Courses Dropdown */}
        <li className="mb-4">
          <button
            onClick={toggleCoursesDropdown}
            className="flex items-center text-white hover:text-teal-300 w-full text-left transition duration-200 ease-in-out transform hover:scale-105"
          >
            <FaBook className="mr-3" /> Courses
            <span className="ml-auto">
              {isCoursesDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          <ul className={`ml-8 mt-2 space-y-2 transition-all duration-300 ease-in-out ${isCoursesDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <li>
              <NavLink 
                to="/tutor/courses" 
                className={({ isActive }) => `flex items-center text-white hover:text-teal-300 transition duration-200 ease-in-out transform ${isActive ? 'font-bold' : 'text-white'}`}
              >
                <FaList className="mr-3" /> View Your Courses
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tutor/add_courses" 
                className={({ isActive }) => `flex items-center text-white hover:text-teal-300 transition duration-200 ease-in-out transform ${isActive ? 'font-bold' : 'text-white'}`}
              >
                <FaPlus className="mr-3" /> Add New Course
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Blogs Dropdown */}
        <li className="mb-4">
          <button
            onClick={toggleBlogsDropdown}
            className="flex items-center text-white hover:text-teal-300 w-full text-left transition duration-200 ease-in-out transform hover:scale-105"
          >
            <FaBlog className="mr-3" /> Blogs
            <span className="ml-auto">
              {isBlogsDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          <ul className={`ml-8 mt-2 space-y-2 transition-all duration-300 ease-in-out ${isBlogsDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <li>
              <NavLink 
                to="/tutor/Blogs/view" 
                className={({ isActive }) => `flex items-center text-white hover:text-teal-300 transition duration-200 ease-in-out transform ${isActive ? 'font-bold' : 'text-white'}`}
              >
                <FaList className="mr-3" /> View Blogs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tutor/blogs/add" 
                className={({ isActive }) => `flex items-center text-white hover:text-teal-300 transition duration-200 ease-in-out transform ${isActive ? 'font-bold' : 'text-white'}`}
              >
                <FaPlus className="mr-3" /> Add New Blog
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="mb-4">
          <NavLink 
            to="/tutor/payments" 
            className={({ isActive }) => `flex items-center text-white hover:text-teal-300 transition duration-200 ease-in-out transform ${isActive ? 'font-bold' : 'text-white'}`}
          >
            <FaDollarSign className="mr-3" /> Payments
          </NavLink>
        </li>

        <li className="mb-4">
          <NavLink 
            to="/tutor/settings" 
            className={({ isActive }) => `flex items-center text-white hover:text-teal-300 transition duration-200 ease-in-out transform ${isActive ? 'font-bold' : 'text-white'}`}
          >
            <FaCogs className="mr-3" /> Settings
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink 
            to="/tutor/customerSupport" 
            className={({ isActive }) => `flex items-center text-white hover:text-teal-300 transition duration-200 ease-in-out transform ${isActive ? 'font-bold' : 'text-white'}`}
          >
            <FaHeadset className="mr-3" /> Customer Support
          </NavLink>
        </li>

        <li>
          <button
            onClick={() => { /* Handle logout logic */ }}
            className="flex items-center text-white hover:text-teal-300 transition duration-200 ease-in-out transform hover:scale-105"
          >
          <CiLogout className="mr-3" /> Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
