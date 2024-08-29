import React from 'react';

const PersonalInfo = (user) => {
  console.log(user.user);
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Personal Information</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Full Name:</label>
          <p className="text-lg text-gray-900">{user.user.name}</p>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Email:</label>
          <p className="text-lg text-gray-900">{user.user.email}</p>
        </div>
        
      </div>
    </div>
  );
};

export default PersonalInfo;
