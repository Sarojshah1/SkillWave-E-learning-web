import React, { useState,useEffect } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    
    if (token) {
      axios
        .get("http://localhost:3000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` }, // Attach token in the headers
        })
        .then((response) => {
          setFormData({
            name:response.data.name,
            email:response.data.email,
            bio:response.data.bio,
          })
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
          
        });
    }

   
  }, []);

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    if (token) {
      axios
        .put(
          "http://localhost:3000/api/user/update-details",
         {
          'name':formData.name,
          email:formData.email,
          bio:formData.bio
         },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          // toast.success("Profile updated successfully!");
          console.log("Profile updated successfully:", response.data);
        })
        .catch((error) => {
          // toast.error("Error updating profile. Please try again.");
          console.error("Error updating profile:", error);
        });
    }
    console.log('Personal details updated:', formData);
  };

  const handlePasswordSubmit = async(e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setError('New password and confirmation do not match.');
      return;
    }
    try {
      // Make the API call to change the password
      const token = localStorage.getItem("token");
      console.log(token);
      // console.log(oldPassword,newPassword);
      const response = await axios.put(
        'http://localhost:3000/api/user/change-password',
        {
          "oldPassword": formData.currentPassword,
          "newPassword": formData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      // Handle success response
      setSuccess('Password changed successfully!');
      setError('');
    } catch (error) {
      // Handle error response
      setError('Failed to change password. Please try again.');
      console.error('Error changing password:', error);
    }
    console.log('Password updated:', formData);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Account Settings</h1>
          
          {/* Personal Details */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
            <form onSubmit={handlePersonalSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center border p-4 rounded-lg shadow-sm bg-white">
                  <FaUser className="text-gray-500 text-2xl mr-4" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex items-center border p-4 rounded-lg shadow-sm bg-white">
                  <FaEnvelope className="text-gray-500 text-2xl mr-4" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex items-center border p-4 rounded-lg shadow-sm bg-white">
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                    placeholder="Your Bio"
                    rows="4"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-colors"
                >
                  Save Personal Details
                </button>
              </div>
            </form>
          </section>

          {/* Security Settings */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Change Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center border p-4 rounded-lg shadow-sm bg-white">
                  <FaLock className="text-gray-500 text-2xl mr-4" />
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                    placeholder="Current Password"
                  />
                </div>
                <div className="flex items-center border p-4 rounded-lg shadow-sm bg-white">
                  <FaLock className="text-gray-500 text-2xl mr-4" />
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                    placeholder="New Password"
                  />
                </div>
                <div className="flex items-center border p-4 rounded-lg shadow-sm bg-white">
                  <FaLock className="text-gray-500 text-2xl mr-4" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:from-green-600 hover:to-green-700 transition-colors"
                >
                  Save Password Changes
                </button>
              </div>
            </form>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
