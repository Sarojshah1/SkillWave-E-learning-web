import React, { useState } from 'react';
import { FaLock, FaLockOpen, FaKey } from 'react-icons/fa';

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = passwords;

    // Basic validation
    if (newPassword !== confirmPassword) {
      setError('New password and confirmation do not match.');
      return;
    }

    // Handle password change logic here (e.g., API call)
    console.log('Password changed:', {
      currentPassword,
      newPassword,
    });

    // Clear error on successful submission
    setError('');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Change Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label htmlFor="currentPassword" className="block text-gray-700 mb-2">
              <FaLockOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handleChange}
                className="pl-10 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Current Password"
                required
              />
            </label>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="newPassword" className="block text-gray-700 mb-2">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handleChange}
                className="pl-10 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="New Password"
                required
              />
            </label>
          </div>
          <div className="mb-6 relative">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
              <FaKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handleChange}
                className="pl-10 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Confirm New Password"
                required
              />
            </label>
          </div>
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}
          <div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-full border border-primary hover:bg-primary-dark transition duration-300"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
