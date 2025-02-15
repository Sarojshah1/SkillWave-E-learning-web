import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setIsLoggedIn(true);
          setUserName(response.data.name);
          setUserProfile(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
          setIsLoggedIn(false);
        });
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleNavLinkClick = (path) => {
    if (window.location.pathname !== `/${path}`) {
      navigate(`/${path}`);
    } else {
      window.location.reload();
    }
  };

  const navitems = [
    { link: "Home", path: "" },
    { link: "Courses", path: "courses" },
    { link: "Posts", path: "posts" },
    { link: "Blog", path: "blogs" },
    { link: "Category", path: "category" },
    { link: "About Us", path: "aboutus" },
  ];

  const profileOptions = [
    { link: "View Profile", path: "profile" },
    { link: "Edit Profile", path: "edit-profile" },
    { link: "Change Password", path: "change-password" },
    { link: "My Learnings", path: "learnings" },
    { link: "Logout", path: "", action: handleLogout },
  ];

  return (
    <nav className="bg-primary shadow-container md:px-14 p-4 max-w-screen-2xl mx-auto text-primary">
      <div className="text-lg mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold items-center">
          <img src={logo} alt="CareerVista" className="w-28 inline-block" />
        </a>
        <div className="hidden md:flex space-x-12 items-center flex-grow justify-end">
          {navitems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavLinkClick(item.path)}
              className="text-white block hover:font-bold hover:text-white"
            >
              {item.link}
            </button>
          ))}
        </div>
        <div className="hidden md:flex space-x-4 items-center ml-12">
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-primary transition duration-300"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {userProfile ? (
                  <img
                    src={`http://localhost:3000/profile/${userProfile.profile_picture}`}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FaUserCircle className="text-2xl" />
                )}
                <span className="hidden md:inline">{userName || "Profile"}</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 transition-opacity duration-300 z-20">
                  {profileOptions.map((option, index) =>
                    option.action ? (
                      <button
                        key={index}
                        onClick={() => {
                          option.action();
                          window.location.reload();
                        }}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        {option.link}
                      </button>
                    ) : (
                      <button
                        key={index}
                        onClick={() => handleNavLinkClick(option.path)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {option.link}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => handleNavLinkClick("login")}
                className="bg-white text-primary px-4 py-2 rounded-full border border-primary hover:bg-primary hover:text-white transition duration-300"
              >
                Login
              </button>
              <button
                onClick={() => handleNavLinkClick("signup")}
                className="bg-primary text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-primary transition duration-300"
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
