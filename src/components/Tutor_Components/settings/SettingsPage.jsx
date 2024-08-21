import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';
// import { AiOutlineSave, AiOutlineCancel } from 'react-icons/ai';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Account Settings</h1>
          
          {/* Personal Details */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
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
                <FaPhone className="text-gray-500 text-2xl mr-4" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded-lg"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </section>

          {/* Security Settings */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Change Password</h2>
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
          </section>

          {/* Save & Cancel Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:from-green-600 hover:to-green-700 transition-colors"
            >
             
              Save Changes
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-600 transition-colors"
            >
              
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
