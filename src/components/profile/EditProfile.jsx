import React, { useState,useEffect } from "react";
import { set } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    bio:""
  });
  const token = localStorage.getItem("token");
  useEffect(() => {
    
    if (token) {
      axios
        .get("http://localhost:3000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` }, // Attach token in the headers
        })
        .then((response) => {
          setProfileData({
            name:response.data.name,
            email:response.data.email,
            bio:response.data.bio

          })
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
          
        });
    }

   
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (token) {
      axios
        .put(
          "http://localhost:3000/api/user/update-details",
          profileData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          toast.success("Profile updated successfully!");
          console.log("Profile updated successfully:", response.data);
        })
        .catch((error) => {
          toast.error("Error updating profile. Please try again.");
          console.error("Error updating profile:", error);
        });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="pl-10 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Name"
                />
              </label>
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="pl-10 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="relative col-span-2">
              <label htmlFor="bio" className="block text-gray-700 mb-2">
                <textarea
                  id="bio"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  className="pl-3 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Bio"
                  rows="4"
                />
              </label>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-full border border-primary hover:bg-primary-dark transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
