import React, { useState,useEffect } from 'react';
import { NavLink,useNavigate  } from 'react-router-dom';
import axios from 'axios';
import {
  FaChalkboardTeacher, FaBook, FaCalendarAlt,
  FaEnvelope, FaCogs, FaDollarSign, FaBlog, FaStar,
  FaChevronDown, FaChevronUp, FaList, FaPlus,
  FaHeadset
} from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isBlogsDropdownOpen, setIsBlogsDropdownOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const toggleBlogsDropdown = () => {
    setIsBlogsDropdownOpen(!isBlogsDropdownOpen);
  };
  const handleLogout = () => {
    // Clear any authentication tokens or user data stored
    localStorage.removeItem("token"); // Example: Clearing token from localStorage
    navigate("/login"); // Redirect to login page
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append('profile_picture', selectedFile);

    try {
      const response = await axios.put('http://localhost:3000/api/user/update-profile-picture',  {
        'profile_picture':selectedFile
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      setUserProfile((prevProfile) => ({
        ...prevProfile,
        profile_picture: response.data.profile_picture
      }));
    } catch (error) {
      console.error('Error updating profile picture:', error);
    }
    window.location.reload();
  };


  useEffect(() => {
    const token = localStorage.getItem("token");
    // Fetch user profile data from the API
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` }, // Attach token in the headers
        }); 
        console.log(response.data)
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="bg-gradient-to-b from-teal-700 to-teal-900 text-white w-64 h-screen p-6 flex flex-col shadow-2xl">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <img
            src={`http://localhost:3000/profile/${userProfile.profile_picture}`}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-2 border-2 border-white transition-transform transform hover:scale-105"
          />
          <label className="absolute bottom-0 right-0 bg-teal-500 p-1 rounded-full cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <FaPlus className="text-white" />
          </label>
        </div>
        <button
          onClick={handleUpload}
          className="mt-2 bg-teal-500 text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-teal-600"
        >
          Upload
        </button>
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold">{userProfile.name}</h3>
          <p className="text-sm text-gray-300 mb-1">{userProfile.email}</p>
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
            onClick={handleLogout}
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
