import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FaCamera } from 'react-icons/fa'; // Import an icon for file selection
import axios from 'axios';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
    profile_picture: null,
    bio: '',
  });

  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = React.createRef(); // Create a reference for the file input

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profile_picture: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const submissionData = new FormData();
      submissionData.append('name', formData.name);
      submissionData.append('email', formData.email);
      submissionData.append('password', formData.password);
      submissionData.append('role', formData.role);
      submissionData.append('bio', formData.bio);
      if (formData.profile_picture) {
        submissionData.append('profile_picture', formData.profile_picture);
      }

      // Example API request - adjust the endpoint as needed
      const response = await axios.post('http://localhost:3000/api/user/register', submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle successful registration (e.g., redirect to login page)
      console.log(response.data);

      // Reset form or redirect to another page
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8">
        <Transition
          show={step === 1}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="p-8 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-center text-gray-900">
              Choose Profile Picture
            </h2>
            <p className="text-center text-gray-600 mt-2">
              Let us know who you are!
            </p>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                <div
                  className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
                  onClick={handleIconClick}
                >
                  {profilePicturePreview ? (
                    <img
                      src={profilePicturePreview}
                      alt="Profile Preview"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <FaCamera className="text-gray-600 text-2xl" />
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 mt-6"
                disabled={!profilePicturePreview}
              >
                Next
              </button>
            </div>
          </div>
        </Transition>

        <Transition
          show={step === 2}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="p-8 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-center text-gray-900">
              Create Your Account
            </h2>
            <p className="text-center text-gray-600 mt-2">
              Join us and start your learning journey!
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                >
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  placeholder="Tell us something about yourself (Optional)"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  disabled={loading}
                >
                  {loading ? 'Registering...' : 'Register'}
                </button>
              </div>
              {error && <p className="mt-4 text-center text-red-600">{error}</p>}
            </form>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Signup;
