import React, { useState } from "react";
import { FaEdit, FaGraduationCap, FaCertificate, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import PersonalInfo from "./PersonalInfo";
import CertificateCard from "./CertificateCard";
import QuizCard from './QuizCard';
const courses = [
  {
    thumbnail: "https://via.placeholder.com/300x200",
    title: "Introduction to React",
    description:
      "Learn the basics of React, including components, props, and state.",
    price: "Npr.4999",
    duration: "4 hours",
    level: "Beginner",
    creator: "Jane Smith",
    onClick: () => alert("Enrolled in Introduction to React"),
  },
  {
    thumbnail: "https://via.placeholder.com/300x200",
    title: "Advanced JavaScript",
    description:
      "Deep dive into JavaScript ES6+ features and advanced concepts.",
    price: "Npr.6999",
    duration: "6 hours",
    level: "Intermediate",
    creator: "John Doe",
    onClick: () => alert("Enrolled in Advanced JavaScript"),
  },
  {
    thumbnail: "https://via.placeholder.com/300x200",
    title: "Web Development Bootcamp",
    description: "Comprehensive course covering HTML, CSS, and JavaScript.",
    price: "Npr.1999",
    duration: "12 hours",
    level: "Advanced",
    creator: "Emily Johnson",
    onClick: () => alert("Enrolled in Web Development Bootcamp"),
  },
];

// Sample data for certificates
const certificates = [
  {
    id: 1,
    title: "Certified React Developer",
    issuedBy: "Udemy",
    issuedDate: "2024-01-15",
    description:
      "Certification for completing the React development course with proficiency.",
    badge: "https://via.placeholder.com/100x100", // Placeholder badge image
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    issuedBy: "Coursera",
    issuedDate: "2024-02-20",
    description: "Achievement in advanced JavaScript concepts and techniques.",
    badge: "https://via.placeholder.com/100x100", // Placeholder badge image
  },
  {
    id: 3,
    title: "Web Development Specialist",
    issuedBy: "LinkedIn Learning",
    issuedDate: "2024-03-10",
    description:
      "Certification for mastering web development fundamentals and best practices.",
    badge: "https://via.placeholder.com/100x100", // Placeholder badge image
  },
];

const quizzes = [
    {
      id: 1,
      title: 'React Basics Quiz',
      score: '85%',
      completionDate: '2024-07-15',
      description: 'A quiz covering the fundamental concepts of React.',
    },
    {
      id: 2,
      title: 'JavaScript Advanced Quiz',
      score: '90%',
      completionDate: '2024-07-20',
      description: 'A quiz focused on advanced JavaScript topics and techniques.',
    },
    {
      id: 3,
      title: 'Web Development Fundamentals',
      score: '80%',
      completionDate: '2024-08-05',
      description: 'A quiz on essential web development concepts.',
    },
  ];

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/120");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleQuizClick = (id) => {
    // Handle quiz card click, e.g., navigate to quiz details
    console.log(`Quiz clicked: ${id}`);
  };
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-6 border-b pb-4">
        <div className="relative">
            <img
              src={profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            />
            <input
              type="file"
              id="profilePicInput"
              className="absolute bottom-0 right-0 opacity-0 cursor-pointer"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
            <label
              htmlFor="profilePicInput"
              className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary-dark transition duration-300"
            >
              <FaEdit />
            </label>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600 mt-1">
              “Learning is a continuous journey.”
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
            {activeTab === "info" && <PersonalInfo />}
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
                    onClick={course.onClick}
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
                      link={`/certificate-details/${certificate.id}`} // If using <a> tag
                      // onClick={() => handleCertificateClick(certificate.id)} // If using onClick
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
                      onClick={() => handleQuizClick(quiz.id)}
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
