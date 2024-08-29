import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you're using Axios for API calls
import { FaEdit, FaGraduationCap, FaCertificate, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import PersonalInfo from "./PersonalInfo";
import CertificateCard from "./CertificateCard";
import QuizCard from './QuizCard';
import { toast } from "react-toastify";

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [user, setUser] = useState({
    name: '',
    profilePic: '', // Default placeholder
    email: '',
    bio:'',
  });
  const token = localStorage.getItem("token");
  const [courses, setCourses] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/profile',{
          headers: {
            Authorization: `Bearer ${token}`
          },
        }); 
        console.log(response.data.enrolled_courses);
        setUser({
          name: response.data.name,
          profilePic: response.data.profile_picture || 'https://via.placeholder.com/120',
          email: response.data.email,
          bio:response.data.bio,
          courses: response.data.enrolled_courses|| []
        });
        setCourses(response.data.enrolled_courses);
        setCertificates(response.data.certificates);
        setQuizzes(response.data.quiz_results);
        
        console.log(user)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Fetch additional data if needed
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/user/courses');
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    const fetchCertificates = async () => {
      try {
        const response = await axios.get('/api/user/certificates');
        setCertificates(response.data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('/api/user/quizzes');
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchUserData();
    fetchCourses();
    fetchCertificates();
    fetchQuizzes();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  console.log(courses)

  // const handleProfilePicChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setUser((prevUser) => ({
  //         ...prevUser,
  //         profilePic: reader.result
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const handleProfilePicUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePic: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
    console.log(file);
    if (!file) {
      toast.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('profile_picture', file);

    try {
      await axios.put('http://localhost:3000/api/user/update-profile-picture', {
        'profile_picture':file
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Profile picture updated successfully!');
      // Optionally fetch the updated user data
    } catch (error) {
      console.error("Error updating profile picture:", error);
      toast.error('Failed to update profile picture.');
    }
  };
console.log(user.profilePic)

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-6 border-b pb-4">
          <div className="relative">
            <img
              src={`http://localhost:3000/profile/${user.profilePic}`}
              alt="Profile"
              className="w-32 h-32 rounded-full object-contain border-4 border-primary"
            />
            <input
              type="file"
              id="profilePicInput"
              className="absolute bottom-0 right-0 opacity-0 cursor-pointer"
              accept="image/*"
              onChange={handleProfilePicUpload}
            />
            <label
              htmlFor="profilePicInput"
              className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary-dark transition duration-300"
            >
              <FaEdit />
            </label>
            
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600 mt-1">
              “{user.bio}”
            </p>
            <div className="mt-4">
              <button className="bg-primary text-white px-6 py-3 rounded-full border border-primary hover:bg-primary-dark transition duration-300">
                Enrolled Courses
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex space-x-2 border-b mb-6">
            {["info", "courses", "certificates", "quizzes", "settings"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`py-3 px-6 rounded-t-lg ${
                    activeTab === tab ? "bg-primary text-white" : "bg-gray-200"
                  }`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>
          <div>
            {activeTab === "info" && <PersonalInfo user={user} />}
            {activeTab === "courses" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
                    onClick={() => console.log(`Course clicked: ${course.title}`)}
                  />
                ))}
              </div>
            )}
            {activeTab === "certificates" && (
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((certificate) => (
                    <CertificateCard
                      key={certificate.id}
                      badge={certificate.badge}
                      title={certificate.title}
                      issuedBy={certificate.issuedBy}
                      issuedDate={certificate.issuedDate}
                      description={certificate.description}
                      link={`/certificate-details/${certificate.id}`} 
                    />
                  ))}
                </div>
              </div>
            )}
            {activeTab === "quizzes" && (
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Quizzes Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quizzes.map((quiz) => (
                    <QuizCard
                      key={quiz.id}
                      title={quiz.title}
                      score={quiz.score}
                      completionDate={quiz.completionDate}
                      description={quiz.description}
                      onClick={() => console.log(`Quiz clicked: ${quiz.id}`)}
                    />
                  ))}
                </div>
              </div>
            )}
            {activeTab === "settings" && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Settings</h2>
                <p className="mb-2">
                  <strong>Password:</strong>{" "}
                  <NavLink
                    to="/change-password"
                    className="text-primary hover:underline"
                  >
                    Change Password
                  </NavLink>
                </p>
                <p className="mb-2">
                  <strong>Email Notifications:</strong>{" "}
                  <NavLink
                    to="/email-settings"
                    className="text-primary hover:underline"
                  >
                    Edit Settings
                  </NavLink>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
